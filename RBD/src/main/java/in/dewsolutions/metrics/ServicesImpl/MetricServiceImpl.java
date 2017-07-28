package in.dewsolutions.metrics.ServicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.dewsolutions.metrics.DAO.MetricDAO;
import in.dewsolutions.metrics.Services.MetricService;

@Service
public class MetricServiceImpl implements MetricService {

	@Autowired
	MetricDAO metricDAO;

/*	public ResponseObjectDTO insertUploadMetrics(String FILE_NAME) {
		// TODO Auto-generated method stub
		List<MetricsDTO> listmetrics = new ArrayList<>();
		ResponseObjectDTO responseObject = new ResponseObjectDTO();
		HashMap<String, StringBuilder> error1 = new HashMap<String, StringBuilder>();
		StringBuilder sb = new StringBuilder();
		listmetrics = readExcelFile(FILE_NAME, responseObject, error1, sb);
		Iterator<MetricsDTO> metricsIterator = listmetrics.iterator();
		int count = 0;
		while (metricsIterator.hasNext()) { // iterating each row
			MetricsDTO metrics = metricsIterator.next();

			if ((metrics.getMetricName() == null) || (metrics.getMetricName().equals(""))) {
				sb.append("metric name is blank\n");
				error1.put("Error", sb);
				responseObject.setError(error1);

			}
			if ((metrics.getMetricName() != null) && !(metrics.getMetricName().equals(""))
					&& (metrics.getMetricsTypeId() != null) && (metrics.getFieldTypeId() != null)) {

				metricDAO.insertMetrics(metrics);
				count++;
			}
		}
		responseObject.setInsertRow(count);
		return responseObject;
	}

	@Override
	public List<MetricsDTO> getMetrics() {
		return metricDAO.getMetrics();
	}

	public List<MetricsDTO> readExcelFile(String FILE_NAME, ResponseObjectDTO responseObject,
			HashMap<String, StringBuilder> error1, StringBuilder sb) {
		// TODO Auto-generated method stub

		List<MetricsDTO> listMetrics = new ArrayList<MetricsDTO>();

		try {

			FileInputStream excelFile = new FileInputStream(new File(FILE_NAME));
			Workbook workbook = new XSSFWorkbook(excelFile);
			Sheet datatypeSheet = workbook.getSheetAt(0);
			Iterator<Row> iterator = datatypeSheet.iterator();

			while (iterator.hasNext()) { // iterating each row
				MetricsDTO metrics = new MetricsDTO();
				Row currentRow = iterator.next();
				if (currentRow.getRowNum() != 0) { // skip first column header
					Iterator<Cell> cellIterator = currentRow.iterator();
					while (cellIterator.hasNext()) { // iterating each column
						checkColumIndex(metrics, cellIterator, sb, error1, responseObject);

					}
					listMetrics.add(metrics);

				}
			}
			workbook.close();
			responseObject.setErrorCode(1000);
			responseObject.setError(error1);

			return listMetrics;

		} catch (FileNotFoundException e) {
			responseObject.setErrorCode(1001);
			sb.append("File not found");
			error1.put("fail", sb);
			responseObject.setError(error1);

		} catch (IOException ex) {
			System.out.println("io found execption catched");

			ex.printStackTrace();
			responseObject.setErrorCode(1001);
			sb.append("IO Exception");
			error1.put("fail", sb);
			responseObject.setError(error1);
		}

		catch (Exception e) {
			System.out.println(" execption ");
		}
		return listMetrics;

	}

	public void checkColumIndex(MetricsDTO metrics, Iterator<Cell> cellIterator, StringBuilder sb,
			HashMap<String, StringBuilder> error1, ResponseObjectDTO responseObject) {
		Cell currentCell = cellIterator.next();

		if (currentCell.getColumnIndex() == 0) {
			metrics.setMetricName(currentCell.getStringCellValue());
		}

		else if (currentCell.getColumnIndex() == 1) {
			if (currentCell.toString().equals("")) {
				sb.append("metric type is blank\n");
				error1.put("Error", sb);
				responseObject.setError(error1);
			} else {
				int metric_type = ("General".equalsIgnoreCase(currentCell.toString())) ? 1 : 2;
				metrics.setMetricsTypeId(metric_type);
			}

		} else if (currentCell.getColumnIndex() == 2) {
			checkFieldType(metrics, currentCell, sb, error1, responseObject);

		} else if (currentCell.getColumnIndex() == 3) {
			metrics.setUom(currentCell.toString());

		} else if (currentCell.getColumnIndex() == 4) {
			listValue(metrics, currentCell);

		} else if (currentCell.getColumnIndex() == 5) {
			checkNumberType(metrics, currentCell);
		} else if (currentCell.getColumnIndex() == 6) {
			metrics.setNumberRange(
					(int) currentCell.getNumericCellValue() == 0 ? null : (int) (currentCell.getNumericCellValue()));
		} else if (currentCell.getColumnIndex() == 7) {
			metrics.setCharacterLimit((int) currentCell.getNumericCellValue());
		}
	}

	public void checkNumberType(MetricsDTO metrics, Cell currentCell) {
		int number_type;
		if ("Whole number".equalsIgnoreCase(currentCell.toString())) {
			number_type = 1;
			metrics.setNumberTypeId(number_type);
		} else if ("DECIMAL".equalsIgnoreCase(currentCell.toString())) {
			number_type = 2;
			metrics.setNumberTypeId(number_type);
		} else if ("Percentage (0-100 only)".equalsIgnoreCase(currentCell.toString())) {
			number_type = 3;
			metrics.setNumberTypeId(number_type);
		}
	}

	public void checkFieldType(MetricsDTO metrics, Cell currentCell, StringBuilder sb,
			HashMap<String, StringBuilder> error1, ResponseObjectDTO responseObject) {
		int field_type;
		if (("").equalsIgnoreCase(currentCell.toString())) {
			sb.append("field type is blank\n");
			error1.put("Error", sb);
			responseObject.setError(error1);

		} else if (("List: Multiple Selections".equalsIgnoreCase(currentCell.toString()))) {
			field_type = 1;
			metrics.setFieldTypeId(field_type);
		} else if ("List: Single Selection".equalsIgnoreCase(currentCell.toString())) {
			field_type = 2;
			metrics.setFieldTypeId(field_type);
		} else if ("Number".equalsIgnoreCase(currentCell.toString())) {
			field_type = 3;
			metrics.setFieldTypeId(field_type);
		} else if ("Text Field".equalsIgnoreCase(currentCell.toString())) {
			field_type = 4;
			metrics.setFieldTypeId(field_type);
		} else if ("Yes/No".equalsIgnoreCase(currentCell.toString())) {
			field_type = 5;
			metrics.setFieldTypeId(field_type);
		} else if ("Scale (multi-point)".equalsIgnoreCase(currentCell.toString())) {
			field_type = 6;
			metrics.setFieldTypeId(field_type);
		}
	}

	public void listValue(MetricsDTO metrics, Cell currentCell) {
		String str = currentCell.getStringCellValue();

		String[] values = str.split(Pattern.quote("|#"));
		List<String> listValue = Arrays.asList(values);
		List<String> uniqueList = new ArrayList<String>();
		for (int i = 0; i < listValue.size(); i++) {
			if (!uniqueList.contains(listValue.get(i))) {
				uniqueList.add(listValue.get(i));
			}
		}
		metrics.setListValue(uniqueList);
	}*/

	/*
	 * @Override public ResponseObjectDTO insertMetrics(String FILE_NAME) { //
	 * TODO Auto-generated method stub List<MetricsDTO> listmetrics = new
	 * ArrayList<>(); ResponseObjectDTO responseObject = new
	 * ResponseObjectDTO(); HashMap<String, StringBuilder> error1 = new
	 * HashMap<String, StringBuilder>(); StringBuilder sb = new StringBuilder();
	 * listmetrics = readExcelFile(FILE_NAME, responseObject, error1, sb);
	 * Iterator<MetricsDTO> metricsIterator = listmetrics.iterator(); int count
	 * = 0; while (metricsIterator.hasNext()) { // iterating each row MetricsDTO
	 * metrics = metricsIterator.next();
	 * 
	 * if ((metrics.getMetricName() == null) ||
	 * (metrics.getMetricName().equals(""))) { sb.append(
	 * "metric name is blank\n"); error1.put("Error", sb);
	 * responseObject.setError(error1);
	 * 
	 * } if ((metrics.getMetricName() != null) &&
	 * !(metrics.getMetricName().equals("")) && (metrics.getMetricsTypeId() !=
	 * null) && (metrics.getFieldTypeId() != null)) {
	 * 
	 * metricDAO.insertMetrics(metrics); count++; } }
	 * responseObject.setInsertRow(count); return responseObject; }
	 */
}

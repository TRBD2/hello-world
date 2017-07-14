package in.dewsolutions.metrics.Test;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import in.dewsolutions.metrics.Controller.MetricsController;
import in.dewsolutions.metrics.DAOImpl.MetricsDAOImpl;
import in.dewsolutions.metrics.DTO.MetricsDTO;
import in.dewsolutions.metrics.DTO.ResponseObjectDTO;
import in.dewsolutions.metrics.ServicesImpl.MetricServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:datasource-config.xml" })
public class MetricsTest {

	@Autowired
	MetricsController metricsController;
	@Autowired
	MetricsDAOImpl metricsDAOImpl;
	@Autowired
	MetricServiceImpl metricServiceImpl;

	@Test
	public void insertMetricIfNotExistTest() {
		MetricsDTO metrics = new MetricsDTO();
		metrics.setMetricName("color");
		metrics.setMetricsTypeId(1);
		metrics.setFieldTypeId(1);
		List<String> listvalue = Arrays.asList("green", "red", "blue");
		metrics.setListValue(listvalue);
		String result = metricsDAOImpl.insertMetrics(metrics);
		assertEquals(result, "sucessfully inserted");
	}

	@Test
	public void updateMetricsTest() {
		MetricsDTO metrics = new MetricsDTO();
		metrics.setMetricName("color");
		metrics.setMetricsTypeId(1);
		metrics.setUom("abc");
		List<String> listvalue = Arrays.asList("gray", "red", "blue");
		metrics.setListValue(listvalue);
		String result = metricsDAOImpl.insertMetrics(metrics);
		assertEquals(result, "sucessfully updated");
	}

	@Test
	public void checkIfMetricNameWithTypeExistTest() {
		MetricsDTO metrics = new MetricsDTO();
		metrics.setMetricName("text");
		metrics.setMetricsTypeId(2);
		int check = metricsDAOImpl.checkIfMetricNameWithTypeExist(metrics);
		assertTrue(check == 0);
	}

	@Test
	public void insertMetricsTest4() { // all records are correct
		final String FILE_VAR = "/home/shreyag/Downloads/MetricsUpload.xlsx";
		ResponseObjectDTO object = metricServiceImpl.insertUploadMetrics(FILE_VAR);
		System.out.println("getError for test1: " + object.getError());
		assertTrue(object.getErrorCode() == 1000 && object.getInsertRow() == 5);
	}

	@Test
	public void insertMetricsTest2() { // few records are valid and some invalid
		final String FILE_VAR = "/home/shreyag/Downloads/MetricsUpload1.xlsx";
		ResponseObjectDTO object = metricServiceImpl.insertUploadMetrics(FILE_VAR);
		assertTrue(object.getErrorCode() == 1000 && object.getInsertRow() == 2);
		System.out.println("getError for test2: " + object.getError());
	}

	@Test
	public void insertMetricsTest3() { // all records are Incorrect
		final String FILE_VAR = "/home/shreyag/Downloads/MetricsUpload2.xlsx";
		ResponseObjectDTO object = metricServiceImpl.insertUploadMetrics(FILE_VAR);
		assertTrue(object.getErrorCode() == 1000 && object.getInsertRow() == 0);
		System.out.println("getError for test3: " + object.getError());

	}
	
	@Test
	public void getMetrics() {
		List<MetricsDTO> metricsList=metricsDAOImpl.getMetrics();
		System.out.println("size"+metricsList.size());
		assertTrue(6==metricsList.size());
	}

}

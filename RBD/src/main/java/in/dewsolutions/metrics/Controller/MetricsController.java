package in.dewsolutions.metrics.Controller;

import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MetricsController {

/*	@Autowired
	private MetricService metricService;*/

	@RequestMapping(value = "/")
	public ModelAndView metricsPage(ModelAndView model) throws IOException {
		System.out.println("iiiiiiiii-------------");
		model.setViewName("index");
		return model;
	}

	/*@RequestMapping(value = "/getMetrics", method = RequestMethod.POST)
	public ModelAndView getMetrics(ModelAndView model) {
		model.setViewName("metricsUpload");
		return model;
	}

	@ResponseBody
	@RequestMapping(value = "/getAllMetrics", method = RequestMethod.POST)
	public List<MetricsDTO> getAllMetrics() {
		System.out.println("getAllMetrics Controller starts");
		List<MetricsDTO> metricsList = null;
		metricsList = metricService.getMetrics();
		return metricsList;
	}*/

	/*@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	public @ResponseBody String insertUploadMetrics(@RequestParam("name") String name,
			@RequestParam("file") MultipartFile file) {
		String FILE_NAME;
		if (!file.isEmpty()) {
			try {
				byte[] bytes = file.getBytes();

				// Creating the directory to store file
				String rootPath = System.getProperty("user.dir");
				File dir = new File(rootPath + File.separator + "tmpFiles");
				if (!dir.exists())
					dir.mkdirs();

				// Create the file on server
				File serverFile = new File(dir.getAbsolutePath() + File.separator + name + ".xlsx");
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));

				stream.write(bytes);
				stream.close();
				// System.out.println("Server File Location=" +
				// serverFile.getAbsolutePath());
				FILE_NAME = serverFile.getAbsolutePath();
				metricService.insertUploadMetrics(FILE_NAME);
				return "sucessfuly inserted";
			} catch (Exception e) {
				return "You failed to upload " + name + " => " + e.getMessage();
			}
		} else {
			return "You failed to upload " + name + " because the file was empty.";
		}
	}*/

	/*
	 * @RequestMapping(value = "/insertMetrics", method = RequestMethod.GET)
	 * public ResponseObjectDTO insertMetrics(@RequestBody String FILE_NAME) {
	 * ResponseObjectDTO responseObject = new ResponseObjectDTO();
	 * responseObject = metricService.insertMetrics(FILE_NAME); return
	 * responseObject; }
	 */

}

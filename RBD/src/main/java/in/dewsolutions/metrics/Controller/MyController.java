package in.dewsolutions.metrics.Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import in.dewsolutions.metrics.DTO.Books;
import in.dewsolutions.metrics.DTO.MetricsDTO;
import in.dewsolutions.metrics.Services.MyService;

@RestController
public class MyController {

	@Autowired
	private MyService myService;
	
	/*@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView new11(ModelAndView model) {
		model.setViewName("dashboard");
		return model;
	}*/
	
	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	public ModelAndView new1(ModelAndView model) {
		model.setViewName("dashboard");
		return model;
	}

	@RequestMapping(value = "/view", method = RequestMethod.GET)
	public ModelAndView view(ModelAndView model) {
		model.setViewName("RBDView");
		return model;
	}

	@RequestMapping(value = "/viewSubject", method = RequestMethod.GET)
	public ModelAndView viewSubject(ModelAndView model) {
		model.setViewName("viewSubject");
		return model;
	}

	@RequestMapping(value = "/viewStandared", method = RequestMethod.GET)
	public ModelAndView viewStandared(ModelAndView model) {
		model.setViewName("viewStandared");
		return model;
	}
 
	@RequestMapping(value = "/viewBoard", method = RequestMethod.GET)
	public ModelAndView viewBoard(ModelAndView model) {
		model.setViewName("viewBoard");
		return model;
	}
	
	@RequestMapping(value = "/viewBookType", method = RequestMethod.GET)
	public ModelAndView viewBookType(ModelAndView model) {
		model.setViewName("viewBookType");
		return model;
	}
	
	@RequestMapping(value = "/insertStandared", method = RequestMethod.POST)
	public String insertStandared(@RequestBody Books book) {
		myService.insertStandared(book);
		return "sucess";
	}

	@RequestMapping(value = "/getStandared", method = RequestMethod.POST)
	public List<Books> getStandared() {
		List<Books> listStandared = null;

		listStandared = myService.getStandared();
		return listStandared;
	}

	@RequestMapping(value = "/updateStandared", method = RequestMethod.POST)
	public String updateStandared(@RequestBody Books book) {
		myService.updateStandared(book);
		return "sucess";
	}

	@RequestMapping(value = "/insertBoard", method = RequestMethod.POST)
	public String insertBoard(@RequestBody Books book) {
		myService.insertBoard(book);
		return "sucess";
	}

	@RequestMapping(value = "/getBoard", method = RequestMethod.POST)
	public List<Books> getBoard() {
		List<Books> listBoard = null;
		listBoard = myService.getBoard();
		return listBoard;
	}

	@RequestMapping(value = "/updateBoard", method = RequestMethod.POST)
	public String updateBoard(@RequestBody Books book) {
		myService.updateBoard(book);
		return "sucess";
	}

	@RequestMapping(value = "/insertBookType", method = RequestMethod.POST)
	public String insertBookType(@RequestBody Books book) {
		myService.insertBookType(book);
		return "sucess";
	}
	
	@RequestMapping(value = "/getBookType", method = RequestMethod.POST)
	public List<Books> getBookType() {
		List<Books> listBookType= null;
		listBookType = myService.getBookType();
		return listBookType;
	}

	@RequestMapping(value = "/updateBookType", method = RequestMethod.POST)
	public String updateBookType(@RequestBody Books book) {
		myService.updateBookType(book);
		return "sucess";
	}

	@RequestMapping(value = "/insertSubject", method = RequestMethod.POST)
	public String insertSubject(@RequestBody Books book) {
		myService.insertSubject(book);
		return "sucess";
	}

	@RequestMapping(value = "/updateSubject", method = RequestMethod.POST)
	public String updateSubject(@RequestBody Books book) {
		myService.updateSubject(book);
		return "sucess";
	}
	
	@RequestMapping(value = "/deleteSubject", method = RequestMethod.POST)
	public String deleteSubject(@RequestBody Books book) {
		myService.deleteSubject(book);
		return "sucess";
	}
	
	@RequestMapping(value = "/deleteStandared", method = RequestMethod.POST)
	public String deleteStandared(@RequestBody Books book) {
		myService.deleteStandared(book);
		return "sucess";
	}@RequestMapping(value = "/deleteBoard", method = RequestMethod.POST)
	public String deleteBoard(@RequestBody Books book) {
		myService.deleteBoard(book);
		return "sucess";
	}@RequestMapping(value = "/deleteBookType", method = RequestMethod.POST)
	public String deleteBookType(@RequestBody Books book) {
		myService.deleteBookType(book);
		return "sucess";
	}

	@RequestMapping(value = "/getSubject", method = RequestMethod.POST)
	public List<Books> getSubject() {
		List<Books> listSubject = null;

		listSubject = myService.getSubject();
		return listSubject;
	}

	@RequestMapping(value = "/addBooks", method = RequestMethod.POST)
	public String addBooks(@RequestBody Books book) {
		myService.addBooks(book);
		return "sucess";
	}
	
	@RequestMapping(value = "/addBookMapping", method = RequestMethod.POST)
	public String addBookMapping(@RequestBody Books book) {
		Integer result=myService.addBookMapping(book);
		return "result" + result ;
	}
	
	/*@RequestMapping(value = "/changeStatusOfBookMapping", method = RequestMethod.POST)
	public String changeStatusOfBookMapping(@RequestBody Books book) {
		Integer result=myService.changeStatusOfBookMapping(book);
		return "result" + result ;
	}
	*/
	@RequestMapping(value = "/addGroupSet", method = RequestMethod.POST)
	public String addGroupSet(@RequestBody Books book) {
		myService.addGroupSet(book);
		return "sucess" ;
	}

	@RequestMapping(value = "/addGroupBookMapping", method = RequestMethod.POST)
	public String addGroupBookMapping(@RequestBody Books book) {
		myService.addGroupBookMapping(book);
		return "sucess";
	}
	
	

	public Boolean test() {
		return true;
	}

	@RequestMapping(value = "/insertMetrics1")
	public HashMap<String, List<Integer>> insertMetrics1() {
		List<MetricsDTO> ma = new ArrayList<MetricsDTO>();
		System.out.println("sjkdsjk");

		MetricsDTO metrics1 = new MetricsDTO();
		metrics1.setCharacterLimit(23);
		metrics1.setFieldTypeId(1);
		metrics1.setMetricName("mndnjn");
		metrics1.setMetricsTypeId(1);
		metrics1.setNumberRange(1);
		metrics1.setUom("jjjfdf");
		ma.add(metrics1);

		MetricsDTO metrics2 = new MetricsDTO();
		metrics2.setCharacterLimit(23);
		metrics2.setFieldTypeId(1);
		metrics2.setMetricName("mndnjn");
		metrics2.setMetricsTypeId(1);
		metrics2.setNumberRange(2);
		metrics2.setUom("jjjfdf");
		ma.add(metrics2);

		MetricsDTO metrics3 = new MetricsDTO();
		metrics3.setCharacterLimit(23);
		metrics3.setFieldTypeId(1);
		metrics3.setMetricName("mndnjn");
		metrics3.setMetricsTypeId(1);
		metrics3.setNumberRange(3);
		metrics3.setUom("jjjfdf");
		ma.add(metrics3);
		for (int i = 0; i < ma.size(); i++) {
			if (ma.get(i).getNumberRange() % 2 == 0) {
				// myService.insertMetrics(ma.get(i));

			} else {
				System.out.println("not inserted" + i + "   " + ma.get(i).toString());
			}
		}

		for (int i = 0; i < 4; i++) {
			MetricsDTO metrics = new MetricsDTO();
			metrics.setCharacterLimit(23);
			metrics.setFieldTypeId(1);
			metrics.setMetricName("mndnjn");
			metrics.setMetricsTypeId(1);
			metrics.setNumberRange(i + 1);
			metrics.setUom("jjjfdf");
			// myService.insertMetrics(metrics);
		}

		HashMap<String, List<Integer>> hs = new HashMap<String, List<Integer>>();
		List<Integer> li = new ArrayList<>();
		List<Integer> li1 = new ArrayList<>();
		hs.put("insert", li);
		hs.put("not insert", li1);

		for (int i = 0; i < ma.size(); i++) {// size=3
			if (ma.get(i).getNumberRange() % 2 == 0) { // i=1
				li.add(i);// [1]
			} else {
				li1.add(i);// [0][0,2]
			}
		}
		return hs;
	}

	// @RequestMapping(value="/myPage", method=RequestMethod.POST)
	// public List<MyProductDTO> myPage(ModelAndView model){
	// List<MyProductDTO> products=new ArrayList<MyProductDTO>();
	// //model.setView(view);
	// }

}

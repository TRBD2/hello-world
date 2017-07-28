/**
 *autor: shreya 
 * 16-Jun-2017
 */
package in.dewsolutions.metrics.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author shreyag
 *
 */
@Controller
public class StandaredController {
	
	@RequestMapping(value = "/standareds", method = RequestMethod.GET)
	public ModelAndView new1(ModelAndView model) {
		model.setViewName("standared-list");
		return model;
	}

	@RequestMapping(value = "/addStandareds", method = RequestMethod.GET)
	public ModelAndView addsubjects(ModelAndView model) {
		model.setViewName("addStandared");
		return model;
	}
	
	@RequestMapping(value = "/submitStandareds", method = RequestMethod.POST)
	public ModelAndView submitSubjects(ModelAndView model) {
		model.setViewName("subject-list");
		return model;
	}
}

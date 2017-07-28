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
public class BoardController {
	
	@RequestMapping(value = "/boards", method = RequestMethod.GET)
	public ModelAndView new1(ModelAndView model) {
		model.setViewName("board-list");
		return model;
	}
	
	@RequestMapping(value = "/addBoards", method = RequestMethod.GET)
	public ModelAndView addsubjects(ModelAndView model) {
		model.setViewName("addBoard");
		return model;
	}
	
	@RequestMapping(value = "/submitBoards", method = RequestMethod.POST)
	public ModelAndView submitSubjects(ModelAndView model) {
		model.setViewName("board-list");
		return model;
	}

}

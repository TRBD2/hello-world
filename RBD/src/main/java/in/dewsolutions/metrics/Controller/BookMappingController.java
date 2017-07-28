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
public class BookMappingController {
	
	@RequestMapping(value = "/bookMapping", method = RequestMethod.GET)
	public ModelAndView new1(ModelAndView model) {
		model.setViewName("bookMapping-list");
		return model;
	}


}

package com.sfxie.ui.ace.controller;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class JspJump {

	@RequestMapping(value="/jspJump",method=RequestMethod.GET)
	public String index(String path) {
		return path;
	}
	/**
	 * 访问首页
	 * @return
	 */
	@RequestMapping("/")
    public String index() {
        return "forward:/index.html";
    }

}

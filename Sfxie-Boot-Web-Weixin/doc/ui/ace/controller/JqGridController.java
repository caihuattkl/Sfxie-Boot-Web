package com.sfxie.ui.ace.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class JqGridController {
	@RequestMapping(value="/data",method=RequestMethod.GET)
	@ResponseBody
	public Object data(Integer rows,Integer page,String _search) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("records", "1000000");
		map.put("page", page);
		map.put("total", 100);
		Map<String ,Object> data = new HashMap<String,Object>();
		data.put("id", 1);
		data.put("name", "Desktop Computer");
		data.put("note", "note");
		data.put("stock", "Yes");
		data.put("ship", "FedEx");
		data.put("sdate", "2007-12-03");
		List<Map> list = new ArrayList<Map>();
		list.add(data);
		map.put("rows", list);
		return map;
//		records":"1000000","page":2,"total":50000,"rows":
	}
	
//	http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=jQuery21109972874580680755_1472299818917&qwery=longorders&_search=false&nd=1472300088987&rows=20&page=2&sidx=&sord=asc&_=1472299818919
}

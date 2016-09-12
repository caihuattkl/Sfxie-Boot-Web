package com.sfxie.boot.web.modules.wexin.controller;



import java.util.List;

import javax.annotation.Resource;

import me.chanjar.weixin.common.bean.WxMenu;
import me.chanjar.weixin.common.bean.WxMenu.WxMenuButton;
import me.chanjar.weixin.common.exception.WxErrorException;
import me.chanjar.weixin.mp.api.WxMpMenuService;
import me.chanjar.weixin.mp.util.storage.WxMpConfigStorageUtil;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sfxie.extension.spring4.mvc.controller.SpringMvcController;

/**
 * 登录,注销,注册控制器
 * @TODO	
 * @author 	xieshengfeng
 * @email  	xsfcy@126.com
 * @since 	上午09:45:57 2016年05月03日
 * @example		
 *
 */
@RestController("menu")
public class WeixinMenuController extends SpringMvcController{
	@Resource
	private WxMpMenuService wxMpMenuService;
	
	
	@RequestMapping(value = "/refresh/{appId}", method = { RequestMethod.POST })
    public void refreshMenu(@PathVariable("appId") String appId,
    		@RequestBody List<WxMenuButton> menus) throws WxErrorException{
		
		WxMpConfigStorageUtil.setCurrentAppId(appId);
		
    	/*
    	WxMenu wxMenu = new WxMenu();
    	List<WxMenuButton> bts1 = new ArrayList<WxMenuButton>();
    	WxMenuButton bt1 = new WxMenuButton();
    	bt1.setKey("bt1");
    	bt1.setName("父菜单");
    	bts1.add(bt1);
    	
    	List<WxMenuButton> bts11 = new ArrayList<WxMenuButton>();
    	WxMenuButton bt11 = new WxMenuButton();
    	bt11.setKey("bt11");
    	bt11.setName("子菜单1");
    	bt11.setUrl("http://www.baidu.com");
    	bt11.setType(WxConsts.BUTTON_VIEW);
    	bts11.add(bt11);
    	
    	bt11 = new WxMenuButton();
    	bt11.setKey("bt12");
    	bt11.setName("子菜单2");
    	bt11.setUrl("http://www.baidu.com");
    	bt11.setType(WxConsts.BUTTON_VIEW);
    	bts11.add(bt11);
    	
    	
    	bt1.setSubButtons(bts11);
    	wxMenu.setButtons(bts1);*/
    	
    	WxMenu wxMenu = new WxMenu();
    	wxMenu.setButtons(menus);
    	
    	// 设置菜单
    	wxMpMenuService.menuCreate(wxMenu);
    }
}
package com.sfxie.ui.ace.entity;

import com.sfxie.ui.component.jqgrid.annotation.ColModel;

public class SfxieWeixinUser {

	private Integer id;
	private String app_id;
	private String app_secret;
	private String is_valid;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getApp_id() {
		return app_id;
	}
	public void setApp_id(String app_id) {
		this.app_id = app_id;
	}
	public String getApp_secret() {
		return app_secret;
	}
	public void setApp_secret(String app_secret) {
		this.app_secret = app_secret;
	}
	public String getIs_valid() {
		return is_valid;
	}
	public void setIs_valid(String is_valid) {
		this.is_valid = is_valid;
	}
	
	

//	  `id` int(13) NOT NULL AUTO_INCREMENT COMMENT '主键',
//	  `app_id` varchar(32) DEFAULT NULL COMMENT '微信appID',
//	  `app_secret` varchar(32) DEFAULT NULL COMMENT '微信appsecret',
//	  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
//	  `create_user` varchar(32) DEFAULT NULL COMMENT '创建人',
//	  `is_valid` char(1) DEFAULT NULL COMMENT '是否有效 : 1-有效,0-无效',
}

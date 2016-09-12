SET SESSION FOREIGN_KEY_CHECKS=0;

/* Drop Tables */

DROP TABLE IF EXISTS sfxie_ui_jqgrid_col;
DROP TABLE IF EXISTS sfxie_ui_jqgrid_page;




/* Create Tables */

-- sfxie_ui_jqgrid_col
CREATE TABLE sfxie_ui_jqgrid_col
(
	id int(13) NOT NULL AUTO_INCREMENT COMMENT '主键',
	name varchar(50) COMMENT '名称',
	field_name varchar(32) COMMENT '字段名',
	-- 关联页面编码
	page_code varchar(64) NOT NULL COMMENT '页面编码 : 关联页面编码',
	-- Y-有效,N-无效
	is_valid char DEFAULT 'Y' NOT NULL COMMENT '是否有效 : Y-有效,N-无效',
	-- 1-可编辑,0-不可编辑
	editable char DEFAULT '1' NOT NULL COMMENT '是否可编辑 : 1-可编辑,0-不可编辑',
	editoptions varchar(200) COMMENT 'editoptions',
	edittype varchar(16) COMMENT 'edittype',
	hidden char DEFAULT '0' COMMENT 'hidden',
	sortable char DEFAULT '1' COMMENT 'sortable',
	PRIMARY KEY (id)
) ENGINE = InnoDB COMMENT = 'sfxie_ui_jqgrid_col' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;


-- jqgrid界面页面表
CREATE TABLE sfxie_ui_jqgrid_page
(
	id int(13) NOT NULL AUTO_INCREMENT COMMENT '主键',
	name varchar(50) COMMENT '名称',
	code varchar(64) COMMENT '页面编码',
	PRIMARY KEY (id),
	CONSTRAINT UNI_JQGRID_PAGE_CODE UNIQUE (code)
) ENGINE = InnoDB COMMENT = 'jqgrid界面页面表' DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;



/* Create Foreign Keys */

ALTER TABLE sfxie_ui_jqgrid_col
	ADD FOREIGN KEY (page_code)
	REFERENCES sfxie_ui_jqgrid_page (code)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;




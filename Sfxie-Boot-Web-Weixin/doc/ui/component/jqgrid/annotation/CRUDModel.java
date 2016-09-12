package com.sfxie.ui.component.jqgrid.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;


@Retention (RetentionPolicy.RUNTIME)    
@Target (ElementType.TYPE)   
public @interface CRUDModel {

	String load();
	String add();
	String edit();
	String search();
	String remove();
}

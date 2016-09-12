package com.sfxie.ui.component.jqgrid.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention (RetentionPolicy.RUNTIME)    
@Target (ElementType.FIELD)   
public @interface ColModel {
	String name() default "";
	String index() default "";
	int width();
	boolean sortable();
	boolean editable();
	boolean hidden();
	String edittype();
	String editoptions();
//	{name:'note',index:'note', width:150, sortable: false,editable: true,
//		edittype:"textarea", editoptions:{rows:"2",cols:"10"}} 

}

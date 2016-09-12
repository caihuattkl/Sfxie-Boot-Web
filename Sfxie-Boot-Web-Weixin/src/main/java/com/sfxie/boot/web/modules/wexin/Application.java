package com.sfxie.boot.web.modules.wexin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.XADataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;

import com.sfxie.boot.web.modules.wexin.config.WeiXinDemoApplication;

@SpringBootApplication
@EnableAutoConfiguration(exclude={
		HibernateJpaAutoConfiguration.class,
		DataSourceAutoConfiguration.class,
		DataSourceTransactionManagerAutoConfiguration.class,
		XADataSourceAutoConfiguration.class
})
@ComponentScan(basePackages={"com.sfxie.boot.web.modules.wexin.controller"})
@ImportResource({"classpath:spring-boot-init.xml"})
public class Application extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(Application.class);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(new Object []{Application.class,WeiXinDemoApplication.class}, args);
	}

}
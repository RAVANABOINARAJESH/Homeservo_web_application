 package com.jsp.HomeServo;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HomeServoApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeServoApplication.class, args);
	}
	@Bean
	public ModelMapper get() {
		return new ModelMapper();
	}

}

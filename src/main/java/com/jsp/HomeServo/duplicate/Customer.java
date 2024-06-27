package com.jsp.HomeServo.duplicate;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Customer {
	private int id;
	private String name;
	private String email;
	private long phone;
	private int familyCount;

}

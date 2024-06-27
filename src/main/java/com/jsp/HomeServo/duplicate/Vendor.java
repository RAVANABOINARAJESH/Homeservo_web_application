package com.jsp.HomeServo.duplicate;

import javax.persistence.Column;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Vendor {
	private int id;
	private String name;
	private String email;
	private long phone;
	private String role;
	private double costPerDay;

}

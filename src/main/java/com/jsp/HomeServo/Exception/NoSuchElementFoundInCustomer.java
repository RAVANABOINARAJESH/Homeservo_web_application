package com.jsp.HomeServo.Exception;

import lombok.Data;

@Data
public class NoSuchElementFoundInCustomer extends RuntimeException {
	private String message = "please check the id in customer";

	public NoSuchElementFoundInCustomer(String message) {
		super();
		this.message = message;
	}

}

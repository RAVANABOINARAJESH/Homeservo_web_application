package com.jsp.HomeServo.Exception;

import lombok.Data;

@Data
public class EmailNotFoundForVendor extends RuntimeException {
	private String message = "email is not found please enter correct email";

	public EmailNotFoundForVendor(String message) {
		super();
		this.message = message;
	}

}

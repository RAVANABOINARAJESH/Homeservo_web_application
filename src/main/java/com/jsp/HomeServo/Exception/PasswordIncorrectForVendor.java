package com.jsp.HomeServo.Exception;

import lombok.Data;

@Data
public class PasswordIncorrectForVendor extends RuntimeException {
	private String message = "please check the password";

	public PasswordIncorrectForVendor(String message) {
		super();
		this.message = message;
	}

	public PasswordIncorrectForVendor() {
		super();
	}

}

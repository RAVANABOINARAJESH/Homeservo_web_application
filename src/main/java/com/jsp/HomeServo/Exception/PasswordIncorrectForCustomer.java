package com.jsp.HomeServo.Exception;

import lombok.Data;

@Data
public class PasswordIncorrectForCustomer extends RuntimeException {
	private String message = "password is incorrect please enter correct password";

	public PasswordIncorrectForCustomer(String message) {
		super();
		this.message = message;
	}

	public PasswordIncorrectForCustomer() {
		super();
	}

}

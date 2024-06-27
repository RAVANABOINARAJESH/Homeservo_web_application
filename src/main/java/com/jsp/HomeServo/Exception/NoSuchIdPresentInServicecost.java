package com.jsp.HomeServo.Exception;

import lombok.Data;

@Data
public class NoSuchIdPresentInServicecost extends RuntimeException {
	String message = "no such ID element is found in ServiceCost";

	public NoSuchIdPresentInServicecost(String message) {
		super();
		this.message = message;
	}

}

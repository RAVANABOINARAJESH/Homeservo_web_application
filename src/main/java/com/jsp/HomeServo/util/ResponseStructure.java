package com.jsp.HomeServo.util;

import java.util.List;

import com.jsp.HomeServo.dto.Work;

import lombok.Data;

@Data
public class ResponseStructure<T> {
	private T data;
	private String message;
	private int status;

}

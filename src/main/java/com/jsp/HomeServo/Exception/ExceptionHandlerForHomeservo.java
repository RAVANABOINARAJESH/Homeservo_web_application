package com.jsp.HomeServo.Exception;

import java.sql.SQLIntegrityConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.util.ResponseStructure;

import io.swagger.annotations.ResponseHeader;

@ControllerAdvice
public class ExceptionHandlerForHomeservo extends ResponseEntityExceptionHandler {

	@ExceptionHandler(SQLIntegrityConstraintViolationException.class)
	public ResponseEntity<ResponseStructure<String>> sQLIntegrityConstraintViolationException(
			SQLIntegrityConstraintViolationException ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setStatus(HttpStatus.BAD_REQUEST.value());
		responseStructure.setData("you can not perform this operation ID is present");
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.BAD_REQUEST);

	}

	@ExceptionHandler(EmailNotFoundForCustomer.class)
	public ResponseEntity<ResponseStructure<String>> emailNotFoundForCustomer(EmailNotFoundForCustomer ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		responseStructure.setData("check properly Email is not correct");
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(PasswordIncorrectForCustomer.class)
	public ResponseEntity<ResponseStructure<String>> passwordIncorrectForCustomer(PasswordIncorrectForCustomer ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setData("password is incorrect check properly");
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(EmailNotFoundForVendor.class)
	public ResponseEntity<ResponseStructure<String>> emailNotFoundForVendor(EmailNotFoundForVendor ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setData("check properly email not found");
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(PasswordIncorrectForVendor.class)
	public ResponseEntity<ResponseStructure<String>> passwordIncorrectForVendor(PasswordIncorrectForVendor ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setData("password is incorrect please check it");
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(NoSuchElementFoundInCustomer.class)
	public ResponseEntity<ResponseStructure<String>> noSuchElementFoundInCustomer(NoSuchElementFoundInCustomer ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setData("no such ID element found in customer");
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(NoSuchElementFoundInVendor.class)
	public ResponseEntity<ResponseStructure<String>> noSuchElementFoundInVendor(NoSuchElementFoundInVendor ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setData("No such ID element found in vendor");
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(NoSuchIdElementFoundInWork.class)
	public ResponseEntity<ResponseStructure<String>> noSuchIdElementFoundInWork(NoSuchIdElementFoundInWork ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setData("no such ID  element found in Work");
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(NoSuchIdFoundInAddress.class)
	public ResponseEntity<ResponseStructure<String>> noSuchIdFoundInAddress(NoSuchIdFoundInAddress ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setData("no such id is present in Address");
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(NoSuchIdPresentInServicecost.class)
	public ResponseEntity<ResponseStructure<String>> noSuchIdPresentInServicecost(NoSuchIdPresentInServicecost ex) {
		ResponseStructure<String> responseStructure = new ResponseStructure<>();
		responseStructure.setData("no such id is present in Servicecost");
		responseStructure.setMessage(ex.getMessage());
		responseStructure.setStatus(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(responseStructure, HttpStatus.NOT_FOUND);
	}

}

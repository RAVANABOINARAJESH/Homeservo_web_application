package com.jsp.HomeServo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.service.CustomerService;
import com.jsp.HomeServo.util.ResponseStructure;

@RestController
public class CustomerController {
	@Autowired
	CustomerService customerService;
	
	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PostMapping("/customer")
	public ResponseEntity<ResponseStructure<Customer>> saveCustomer(@RequestBody Customer customer) {
		return customerService.saveCustomer(customer);
	}
	@CrossOrigin(origins ="http://127.0.0.1:5501")
	@GetMapping("/customerlogin")
	public ResponseEntity<ResponseStructure<Customer>> login(@RequestParam String email ,@RequestParam String password){
		return customerService.login(email, password);
	}
	@CrossOrigin(origins ="http://127.0.0.1:5501")
	@PutMapping("/customer")
	public ResponseEntity<ResponseStructure<Customer>> updateCustomer(@RequestBody Customer customer) {
		return customerService.updateCustomer(customer);
	}
	@CrossOrigin(origins ="http://127.0.0.1:5501")
	@DeleteMapping("/customer")
	public ResponseEntity<ResponseStructure<Customer>> deleteCustomer(@RequestParam int cus_id) {
		return customerService.deleteCustomer(cus_id);
	}
	@CrossOrigin(origins ="http://127.0.0.1:5501")
	@GetMapping("/customer")
	public ResponseEntity<ResponseStructure<com.jsp.HomeServo.duplicate.Customer>> getById(@RequestParam int cus_id){
		return customerService.getById(cus_id);
	}


}

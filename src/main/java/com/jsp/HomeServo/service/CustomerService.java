package com.jsp.HomeServo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsp.HomeServo.Exception.EmailNotFoundForCustomer;
import com.jsp.HomeServo.Exception.NoSuchElementFoundInCustomer;
import com.jsp.HomeServo.Exception.PasswordIncorrectForCustomer;
import com.jsp.HomeServo.dao.CustomerDao;
import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.util.ResponseStructure;

import springfox.documentation.swagger2.mappers.ModelMapper;

@Service
public class CustomerService {
	@Autowired
	private CustomerDao customerDao;
	@Autowired
	com.jsp.HomeServo.duplicate.Customer customer1;
	@Autowired
	org.modelmapper.ModelMapper modelMapper;

	public ResponseEntity<ResponseStructure<Customer>> saveCustomer(Customer customer) {

		ResponseStructure<Customer> responseStructure = new ResponseStructure<>();
		responseStructure.setData(customerDao.saveCustomer(customer));
		responseStructure.setMessage("CUSTOMER DATA SAVED SUCCESSFULLY");
		responseStructure.setStatus(HttpStatus.CREATED.value());

		return new ResponseEntity<ResponseStructure<Customer>>(responseStructure, HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseStructure<Customer>> login(String email, String password) {
		Customer customer = customerDao.findByEmail(email);
		if (customer != null) {
			if (customer.getPassword().equals(password)) {

				ResponseStructure<Customer> responseStructure = new ResponseStructure<>();
				responseStructure.setData(customer);
				responseStructure.setMessage("customer login successfully");
				responseStructure.setStatus(HttpStatus.FOUND.value());

				return new ResponseEntity<ResponseStructure<Customer>>(responseStructure, HttpStatus.FOUND);
			} else {
				throw new PasswordIncorrectForCustomer("Enter correct password");
			}
		} else {
			throw new EmailNotFoundForCustomer("enter correct email");
		}
	}

	public ResponseEntity<ResponseStructure<Customer>> updateCustomer(Customer customer) {
		Customer customer2 = customerDao.getById(customer.getId());
		if (customer2 != null) {
			ResponseStructure<Customer> responseStructure = new ResponseStructure<>();
			responseStructure.setData(customerDao.updateCustomer(customer));
			responseStructure.setMessage("customer data updated successfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Customer>>(responseStructure, HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInCustomer("No such ID element found in customer");
		}
	}

	public ResponseEntity<ResponseStructure<Customer>> deleteCustomer(int id) {
		Customer customer = customerDao.getById(id);
		if (customer != null) {

			ResponseStructure<Customer> responseStructure = new ResponseStructure<>();
			responseStructure.setData(customerDao.deleteCustomer(id));
			responseStructure.setMessage("customer data deletd successfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Customer>>(responseStructure, HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInCustomer("please check the id in Customer");
		}
	}

	public ResponseEntity<ResponseStructure<com.jsp.HomeServo.duplicate.Customer>> getById(int id) {
		Customer customer = customerDao.getById(id);
		if (customer != null) {
			ResponseStructure<com.jsp.HomeServo.duplicate.Customer> responseStructure = new ResponseStructure<>();
//			customer1.setId(customer.getId());
//			customer1.setName(customer.getName());
//			customer1.setPhone(customer.getPhone());
//			customer1.setEmail(customer.getEmail());
//			customer1.setFamilyCount(customer.getFamilyCount());
//			responseStructure.setData(customer1);
			com.jsp.HomeServo.duplicate.Customer customer2 = (com.jsp.HomeServo.duplicate.Customer) this.modelMapper
					.map(customer, com.jsp.HomeServo.duplicate.Customer.class);
			responseStructure.setData(customer2);
			responseStructure.setMessage("customer find successfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());

			return new ResponseEntity<ResponseStructure<com.jsp.HomeServo.duplicate.Customer>>(responseStructure,
					HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInCustomer("please check the id in Customer");
		}

	}

}

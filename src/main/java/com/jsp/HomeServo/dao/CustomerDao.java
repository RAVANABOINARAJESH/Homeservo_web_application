package com.jsp.HomeServo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.repository.CustomerRepository;

@Repository
public class CustomerDao {
	@Autowired
	CustomerRepository customerRepository;

	public Customer saveCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	public Customer findByEmail(String email) {
		Customer customer = customerRepository.findByEmail(email);
		if (customer != null) {
			return customer;
		} else {
			return null;
		}
	}

	public Customer updateCustomer(Customer customer) {
		Optional<Customer> optional = customerRepository.findById(customer.getId());
		if (optional.isPresent()) {
			Customer customer1 = customerRepository.findById(customer.getId()).get();

			if (customer.getName() == "") {
				customer.setName(customer1.getName());
			}
			if (customer.getEmail() == "") {
				customer.setEmail(customer1.getEmail());
			}
			if (customer.getPassword() == "") {
				customer.setPassword(customer1.getPassword());
			}
			if (customer.getAddress() == null) {
				customer.setAddress(customer1.getAddress());
			}
			if (customer.getFamilyCount() == 0) {
				customer.setFamilyCount(customer1.getFamilyCount());
			}
			if (customer.getPhone() == 0) {
				customer.setPhone(customer1.getPhone());
			}
		} else {
			return null;
		}
		return customerRepository.save(customer);
	}

	public Customer deleteCustomer(int id) {
		Optional<Customer> optional = customerRepository.findById(id);
		if (optional.isPresent()) {
			Customer customer = customerRepository.findById(id).get();
			customer.setAddress(null);
			customer.setWorks(null);
			customerRepository.deleteById(id);
			return optional.get();
		} else {
			return null;
		}

	}

	public Customer getById(int id) {
		Optional<Customer> optional = customerRepository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

}

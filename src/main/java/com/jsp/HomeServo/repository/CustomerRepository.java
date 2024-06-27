package com.jsp.HomeServo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.jsp.HomeServo.dto.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>  {
	@Query
	public Customer findByEmail(String email);
}

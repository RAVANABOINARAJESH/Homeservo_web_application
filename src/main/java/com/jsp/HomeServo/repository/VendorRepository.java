package com.jsp.HomeServo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.dto.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {
	
	public Vendor findByEmail(String email);

}

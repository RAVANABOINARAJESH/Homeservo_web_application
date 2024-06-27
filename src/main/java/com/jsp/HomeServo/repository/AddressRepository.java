package com.jsp.HomeServo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.HomeServo.dto.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {

}

package com.jsp.HomeServo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.HomeServo.dto.ServiceCost;

public interface ServiceCostRepositoty extends JpaRepository<ServiceCost, Integer> {

}

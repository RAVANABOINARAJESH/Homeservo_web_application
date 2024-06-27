package com.jsp.HomeServo.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.HomeServo.dto.ServiceCost;
import com.jsp.HomeServo.repository.ServiceCostRepositoty;

@Repository
public class ServiceCostDao {
	@Autowired
	ServiceCostRepositoty serviceCostRepositoty;

	public ServiceCost saveCost(ServiceCost serviceCost) {
		return serviceCostRepositoty.save(serviceCost);
	}

	public ServiceCost payModeCost(ServiceCost serviceCost) {
		Optional<ServiceCost> optional = serviceCostRepositoty.findById(serviceCost.getId());
		if (optional.isPresent()) {
			ServiceCost serviceCost1 = serviceCostRepositoty.findById(serviceCost.getId()).get();

			if (serviceCost.getDays() == 0.0) {
				serviceCost.setDays(serviceCost1.getDays());
			}
			if (serviceCost.getTotalAmount() == 0.0) {
				serviceCost.setTotalAmount(serviceCost1.getTotalAmount());
				;
			}
			if (serviceCost.getMode() == null) {
				serviceCost.setMode(serviceCost.getMode());
			}
			return serviceCostRepositoty.save(serviceCost);
		} else {
			return null;
		}
	}

	public ServiceCost getById(int id) {
		ServiceCost serviceCost = serviceCostRepositoty.findById(id).get();
		if (serviceCost != null) {
			return serviceCost;
		} else {
			return null;
		}
	}

}

package com.jsp.HomeServo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.HomeServo.dto.ServiceCost;
import com.jsp.HomeServo.service.ServiceCostService;
import com.jsp.HomeServo.util.ResponseStructure;

import io.swagger.annotations.ApiOperation;

@RestController
public class ServiceCostController {
	@Autowired
	ServiceCostService serviceCostService;;

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PostMapping("/cost")
	@ApiOperation(value = "api for cost save")
	public ResponseEntity<ResponseStructure<ServiceCost>> saveCost(@RequestParam int w_id, @RequestParam int v_id) {
		return serviceCostService.saveCost(w_id, v_id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PutMapping("/cost")
	public ResponseEntity<ResponseStructure<ServiceCost>> paymentMode(@RequestParam int c_id,
			@RequestBody ServiceCost serviceCost) {
		return serviceCostService.paymentMode(c_id, serviceCost);
	}

}

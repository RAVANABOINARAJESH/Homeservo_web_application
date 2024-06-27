package com.jsp.HomeServo.controller;

import org.mapstruct.MapMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.HomeServo.dto.Address;
import com.jsp.HomeServo.service.AddressService;
import com.jsp.HomeServo.util.ResponseStructure;

@RestController
public class AddressController {
	@Autowired
	AddressService addressService;
	
	@PutMapping("/address")
	public ResponseEntity<ResponseStructure<Address>> updateAddress(@RequestBody Address address) {
		return addressService.updateAddress(address);
	}
	@GetMapping("/address")
	public ResponseEntity<ResponseStructure<Address>> getById( @RequestParam int id) {
		return addressService.getById(id);
	}

}

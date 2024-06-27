package com.jsp.HomeServo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.HomeServo.dto.Vendor;
import com.jsp.HomeServo.service.VendorService;
import com.jsp.HomeServo.util.ResponseStructure;

@RestController
public class VendorController {
	@Autowired
	VendorService vendorService;

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PostMapping("/vendor")
	public ResponseEntity<ResponseStructure<Vendor>> saveVendor(@RequestBody Vendor vendor) {
		return vendorService.saveVendor(vendor);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@GetMapping("/vendorlogin")
	public ResponseEntity<ResponseStructure<Vendor>> login(@RequestParam String email, @RequestParam String password) {
		return vendorService.loginVendor(email, password);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PutMapping("/vendor")
	public ResponseEntity<ResponseStructure<Vendor>> updateVendor(@RequestBody Vendor vendor) {
		return vendorService.updateVendor(vendor);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@DeleteMapping("/deletevendor")
	public ResponseEntity<ResponseStructure<Vendor>> deleteVendor(@RequestParam int ven_id) {
		return vendorService.deleteVendor(ven_id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@GetMapping("/vendor")
	public ResponseEntity<ResponseStructure<com.jsp.HomeServo.duplicate.Vendor>> getById(@RequestParam int id) {
		return vendorService.getById(id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@GetMapping("/vendorall")
	public ResponseEntity<ResponseStructure<List<Vendor>>> getAll(@RequestParam int cus_id) {
		return vendorService.getAll(cus_id);
	}

}

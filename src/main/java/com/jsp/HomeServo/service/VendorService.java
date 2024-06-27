package com.jsp.HomeServo.service;

import java.util.List;

import javax.swing.text.html.HTML;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsp.HomeServo.Exception.EmailNotFoundForVendor;
import com.jsp.HomeServo.Exception.NoSuchElementFoundInCustomer;
import com.jsp.HomeServo.Exception.NoSuchElementFoundInVendor;
import com.jsp.HomeServo.Exception.PasswordIncorrectForVendor;
import com.jsp.HomeServo.dao.CustomerDao;
import com.jsp.HomeServo.dao.VendorDao;
import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.dto.Vendor;
import com.jsp.HomeServo.util.ResponseStructure;

@Service
public class VendorService {
	@Autowired
	private VendorDao vendorDao;
	@Autowired
	private CustomerDao customerDao;
	@Autowired
	com.jsp.HomeServo.duplicate.Vendor vendor1;

	public ResponseEntity<ResponseStructure<Vendor>> saveVendor(Vendor vendor) {
		ResponseStructure<Vendor> responseStructure = new ResponseStructure<>();
		responseStructure.setStatus(HttpStatus.CREATED.value());
		responseStructure.setData(vendorDao.saveVendor(vendor));
		responseStructure.setMessage("vendor data saved sucessfully");
		return new ResponseEntity<ResponseStructure<Vendor>>(responseStructure, HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseStructure<Vendor>> loginVendor(String email, String password) {
		Vendor vendor = vendorDao.findByEmail(email);
		if (vendor != null) {
			if (vendor.getPassword().equals(password)) {
				ResponseStructure<Vendor> responseStructure = new ResponseStructure<>();
				responseStructure.setData(vendor);
				responseStructure.setMessage("vendor login successfully");
				responseStructure.setStatus(HttpStatus.FOUND.value());
				return new ResponseEntity<ResponseStructure<Vendor>>(responseStructure, HttpStatus.FOUND);
			} else {
				throw new PasswordIncorrectForVendor("Enter the correct password");
			}
		} else {
			throw new EmailNotFoundForVendor("Enter the correct email");
		}
	}

	public ResponseEntity<ResponseStructure<Vendor>> updateVendor(Vendor vendor) {
		Vendor vendor2 = vendorDao.findByIdVendor(vendor.getId());
		if (vendor2 != null) {
			ResponseStructure<Vendor> responseStructure = new ResponseStructure<>();
			responseStructure.setData(vendorDao.updateVendor(vendor));
			responseStructure.setMessage("vendor data updated succesfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Vendor>>(responseStructure, HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInVendor("Please check the ID properly in vendor");
		}
	}

	public ResponseEntity<ResponseStructure<Vendor>> deleteVendor(int ven_id) {
		Vendor vendor = vendorDao.findByIdVendor(ven_id);
		if (vendor != null) {
			ResponseStructure<Vendor> responseStructure = new ResponseStructure<>();
			responseStructure.setData(vendorDao.deleteVendor(ven_id));
			responseStructure.setMessage("vendor data deleted succesfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Vendor>>(responseStructure, HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInVendor("Please check the ID properly in vendor");
		}
	}

	public ResponseEntity<ResponseStructure<com.jsp.HomeServo.duplicate.Vendor>> getById(int id) {
		Vendor vendor = vendorDao.findByIdVendor(id);
		if (vendor != null) {
			ResponseStructure<com.jsp.HomeServo.duplicate.Vendor> responseStructure = new ResponseStructure<>();
			vendor1.setId(vendor.getId());
			vendor1.setName(vendor.getName());
			vendor1.setEmail(vendor.getEmail());
			vendor1.setPhone(vendor.getPhone());
			vendor1.setRole(vendor.getRole());
			vendor1.setCostPerDay(vendor.getCostPerDay());
			responseStructure.setData(vendor1);
			responseStructure.setMessage("vendor data found successfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<com.jsp.HomeServo.duplicate.Vendor>>(responseStructure,
					HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInVendor("please check the id properly in vendor");
		}
	}

	public ResponseEntity<ResponseStructure<List<Vendor>>> getAll(int cus_id) {
		Customer customer = customerDao.getById(cus_id);
		if (customer != null) {
			List<Vendor> list = vendorDao.findAllVendor();
			ResponseStructure<List<Vendor>> responseStructure = new ResponseStructure<List<Vendor>>();
			responseStructure.setData(list);
			responseStructure.setMessage("vendor  list found  successfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<List<Vendor>>>(responseStructure, HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInCustomer("No ID element found in Customer");
		}
	}

}

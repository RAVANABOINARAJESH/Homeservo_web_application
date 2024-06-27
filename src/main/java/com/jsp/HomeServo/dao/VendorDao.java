package com.jsp.HomeServo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.dto.Vendor;
import com.jsp.HomeServo.repository.VendorRepository;

@Repository
public class VendorDao {
	@Autowired
	VendorRepository vendorRepository;

	public Vendor saveVendor(Vendor vendor) {
		return vendorRepository.save(vendor);
	}

	public Vendor findByEmail(String email) {
		Vendor vendor = vendorRepository.findByEmail(email);
		if (vendor != null) {
			return vendor;
		} else {
			return null;
		}
	}

	public Vendor updateVendor(Vendor vendor) {
		Optional<Vendor> optional = vendorRepository.findById(vendor.getId());
		if (optional.isPresent()) {
			Vendor vendor1 = vendorRepository.findById(vendor.getId()).get();
			if (vendor.getName() == "") {
				vendor.setName(vendor1.getName());
			}
			if (vendor.getAddress() == null) {
				vendor.setAddress(vendor1.getAddress());
			}
			if (vendor.getEmail() == "") {
				vendor.setEmail(vendor1.getEmail());
			}
			if (vendor.getPassword() == "") {
				vendor.setPassword(vendor1.getPassword());
			}
			if (vendor.getPhone() == 0) {
				vendor.setPhone(vendor1.getPhone());
			}
			if (vendor.getRole() == "") {
				vendor.setRole(vendor1.getRole());
			}
			if (vendor.getCostPerDay() == 0) {
				vendor.setCostPerDay(vendor1.getCostPerDay());
			}

		} else {
			return null;
		}
		return vendorRepository.save(vendor);

	}

	public Vendor deleteVendor(int ven_id) {
		Optional<Vendor> optional = vendorRepository.findById(ven_id);
		if (optional.isPresent()) {
			Vendor vendor = vendorRepository.findById(ven_id).get();
			vendor.setAddress(null);
			vendor.setCosts(null);
			vendorRepository.deleteById(ven_id);
			return optional.get();
		} else {
			return null;
		}

	}

	public Vendor findByIdVendor(int id) {
		Optional<Vendor> optional = vendorRepository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	public List<Vendor> findAllVendor() {
		List<Vendor> list = vendorRepository.findAll();
		if (list != null) {
			return list;
		} else {
			return null;
		}
	}

}

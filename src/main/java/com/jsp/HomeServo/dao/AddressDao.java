package com.jsp.HomeServo.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.HomeServo.dto.Address;
import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.repository.AddressRepository;
import com.jsp.HomeServo.repository.WorkRepository;

@Repository
public class AddressDao {
	@Autowired
	AddressRepository addressRepository;

	public Address updateAddress(Address address) {
		Optional<Address> optional = addressRepository.findById(address.getId());
		if (optional.isPresent()) {
			Address address1 = addressRepository.findById(address.getId()).get();
			if (address.getDno() == null) {
				address.setDno(address1.getDno());
			}
			if (address.getDistrict() == null) {
				address.setDistrict(address1.getDistrict());
			}
			if (address.getLandmark() == null) {
				address.setLandmark(address1.getLandmark());
			}
			if (address.getPincode() == 0) {
				address.setPincode(address1.getPincode());
			}
			if (address.getState() == null) {
				address.setState(address1.getState());
			}
			if (address.getStreet() == null) {
				address.setStreet(address1.getStreet());
			}

		} else {
			return null;
		}
		return addressRepository.save(address);
	}

	public Address getById(int id) {
		Optional<Address> optional = addressRepository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

}

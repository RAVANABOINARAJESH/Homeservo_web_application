package com.jsp.HomeServo.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsp.HomeServo.Exception.NoSuchElementFoundInCustomer;
import com.jsp.HomeServo.Exception.NoSuchElementFoundInVendor;
import com.jsp.HomeServo.Exception.NoSuchIdElementFoundInWork;
import com.jsp.HomeServo.dao.CustomerDao;
import com.jsp.HomeServo.dao.VendorDao;
import com.jsp.HomeServo.dao.WorkDao;
import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.dto.Vendor;
import com.jsp.HomeServo.dto.Work;
import com.jsp.HomeServo.util.ResponseStructure;

@Service
public class WorkService {
	@Autowired
	private WorkDao workDao;
	@Autowired
	private CustomerDao customerDao;
	@Autowired
	private VendorDao vendorDao;

	public ResponseEntity<ResponseStructure<Work>> saveWork(Work work, int cus_id) {
		Customer customer = customerDao.getById(cus_id);
		if (customer != null) {
			// SAVE THE CUSTOMER FIRST
			work.setCustomer(customer);
			ResponseStructure<Work> responseStructure = new ResponseStructure<>();
			responseStructure.setData(workDao.saveWork(work));
			responseStructure.setMessage("work saved successfully");
			responseStructure.setStatus(HttpStatus.CREATED.value());
			return new ResponseEntity<ResponseStructure<Work>>(responseStructure, HttpStatus.CREATED);
		} else {
			throw new NoSuchElementFoundInCustomer("no such customer id is present");
		}
	}

	public ResponseEntity<ResponseStructure<Work>> startDate(int workid, int vendorid) {

		Vendor vendor = vendorDao.findByIdVendor(vendorid);
		if (vendor != null) {
			Work work = workDao.getById(workid);
			if (work != null) {
				Date date = new Date(new java.util.Date().getTime());
				work.setStartDate(date);
				List<Vendor> list = new ArrayList<>();
				list.add(vendor);
				work.setVendor(list);
				ResponseStructure<Work> responseStructure = new ResponseStructure<>();
				responseStructure.setData(workDao.updateWork(work));
				responseStructure.setMessage("work updated successfully");
				responseStructure.setStatus(HttpStatus.CREATED.value());
				return new ResponseEntity<ResponseStructure<Work>>(responseStructure, HttpStatus.CREATED);
			} else {
				throw new NoSuchIdElementFoundInWork("Id is not present in work");
			}

		} else {
			throw new NoSuchElementFoundInVendor("Id is not present in Vendor");
		}
	}

	public ResponseEntity<ResponseStructure<Work>> endDate(int workid, int vendorid) {
		Vendor vendor = vendorDao.findByIdVendor(vendorid);
		if (vendor != null) {
			Work work = workDao.getById(workid);
			if (work != null) {
				Date date = new Date(new java.util.Date().getTime());
				work.setEndDate(date);
				List<Vendor> list = new ArrayList<>();
				list.add(vendor);
				work.setVendor(list);
				ResponseStructure<Work> responseStructure = new ResponseStructure<>();
				responseStructure.setData(workDao.updateWork(work));
				responseStructure.setMessage("Work updated succesfully");
				responseStructure.setStatus(HttpStatus.CREATED.value());
				return new ResponseEntity<ResponseStructure<Work>>(responseStructure, HttpStatus.CREATED);

			} else {
				throw new NoSuchIdElementFoundInWork("Id is not present in work");
			}
		} else {
			throw new NoSuchElementFoundInVendor("Id is not present in Vendor");
		}
	}

	public ResponseEntity<ResponseStructure<Work>> getById(int id) {
		Work work = workDao.getById(id);
		if (work != null) {
			ResponseStructure<Work> responseStructure = new ResponseStructure<>();
			responseStructure.setData(work);
			responseStructure.setMessage("based on id fetching of work successfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<Work>>(responseStructure, HttpStatus.FOUND);
		} else {
			throw new NoSuchIdElementFoundInWork("Id is not present in work");
		}

	}

	public ResponseEntity<ResponseStructure<List<Work>>> listOfWorks(int v_id) {
		Vendor vendor = vendorDao.findByIdVendor(v_id);
		if (vendor != null) {
			List<Work> list = workDao.listOfWorks();
			ResponseStructure<List<Work>> responseStructure = new ResponseStructure<>();
			responseStructure.setData(list);
			responseStructure.setMessage("fetching of work list successfully");
			responseStructure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponseStructure<List<Work>>>(responseStructure, HttpStatus.FOUND);
		} else {
			throw new NoSuchElementFoundInVendor("Id is not present in Vendor");
		}
	}

}

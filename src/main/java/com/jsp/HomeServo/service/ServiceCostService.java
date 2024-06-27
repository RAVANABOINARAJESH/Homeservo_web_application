package com.jsp.HomeServo.service;

import java.sql.Date;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.jsp.HomeServo.Exception.NoSuchElementFoundInCustomer;
import com.jsp.HomeServo.Exception.NoSuchElementFoundInVendor;
import com.jsp.HomeServo.Exception.NoSuchIdElementFoundInWork;
import com.jsp.HomeServo.Exception.NoSuchIdPresentInServicecost;
import com.jsp.HomeServo.dao.CustomerDao;
import com.jsp.HomeServo.dao.ServiceCostDao;
import com.jsp.HomeServo.dao.VendorDao;
import com.jsp.HomeServo.dao.WorkDao;
import com.jsp.HomeServo.dto.Customer;
import com.jsp.HomeServo.dto.ServiceCost;
import com.jsp.HomeServo.dto.Vendor;
import com.jsp.HomeServo.dto.Work;
import com.jsp.HomeServo.util.ResponseStructure;

@Service
public class ServiceCostService {

	@Autowired
	VendorDao vendorDao;
	@Autowired
	WorkDao workDao;
	@Autowired
	ServiceCostDao serviceCostDao;
	@Autowired
	CustomerDao customerDao;
//	@Autowired
//	ServiceCost serviceCost3;

	public ResponseEntity<ResponseStructure<ServiceCost>> saveCost(int w_id, int v_id) {
		Vendor vendor = vendorDao.findByIdVendor(v_id);
		if (vendor != null) {
			Work work = workDao.getById(w_id);
			if (work != null && work.getCost() == null) {
				Double costPerDay = vendor.getCostPerDay();
				Date start = work.getStartDate();
				Date end = work.getEndDate();
				Duration duration = Duration.between(start.toLocalDate().atStartOfDay(),
						end.toLocalDate().atStartOfDay());
				int days = (int) duration.toDays();

				// Save the new service cost for each entry

				ServiceCost serviceCost3 = new ServiceCost();

				serviceCost3.setDays(days);
				serviceCost3.setTotalAmount(days * costPerDay);
				// Save the service cost object
				ServiceCost cost = serviceCostDao.saveCost(serviceCost3);
				work.setCost(cost);
				List<ServiceCost> list = new ArrayList<>();
				list.add(cost);
				list.addAll(vendor.getCosts());
				vendor.setCosts(list);

				vendorDao.updateVendor(vendor);
				workDao.updateWork(work);

				ResponseStructure<ServiceCost> responseStructure = new ResponseStructure<>();
				responseStructure.setData(cost);
				responseStructure.setMessage("cost  saved successfully");
				responseStructure.setStatus(HttpStatus.CREATED.value());
				return new ResponseEntity<ResponseStructure<ServiceCost>>(responseStructure, HttpStatus.CREATED);

			} else {
				throw new NoSuchIdElementFoundInWork("Id is not present in work");

			}
		} else {
			throw new NoSuchElementFoundInVendor("No ID element found in vendor");

		}
	}

	public ResponseEntity<ResponseStructure<ServiceCost>> paymentMode(int c_id, ServiceCost serviceCost) {
		Customer customer = customerDao.getById(c_id);
		if (customer != null) {
			ServiceCost serviceCost1 = serviceCostDao.getById(serviceCost.getId());
			if (serviceCost1 != null) {
				ResponseStructure<ServiceCost> responseStructure = new ResponseStructure<>();
				responseStructure.setData(serviceCostDao.payModeCost(serviceCost));
				responseStructure.setMessage("paymode  saved successfully");
				responseStructure.setStatus(HttpStatus.CREATED.value());
				return new ResponseEntity<ResponseStructure<ServiceCost>>(responseStructure, HttpStatus.CREATED);
			} else {
				throw new NoSuchIdPresentInServicecost("no such id element is present in Service cost");
			}
		} else {
			throw new NoSuchElementFoundInCustomer("No such ID element found in customer");

		}
	}

}

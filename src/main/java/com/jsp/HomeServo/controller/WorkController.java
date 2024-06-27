package com.jsp.HomeServo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.HomeServo.dao.VendorDao;
import com.jsp.HomeServo.dto.Vendor;
import com.jsp.HomeServo.dto.Work;
import com.jsp.HomeServo.service.WorkService;
import com.jsp.HomeServo.util.ResponseStructure;

@RestController
public class WorkController {
	@Autowired
	WorkService workService;

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PostMapping("/work")
	public ResponseEntity<ResponseStructure<Work>> saveWork(@RequestBody Work work, @RequestParam int cus_id) {
		return workService.saveWork(work, cus_id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PutMapping("/workstart")
	public ResponseEntity<ResponseStructure<Work>> startWork(@RequestParam int work_id, @RequestParam int vendor_id) {
		return workService.startDate(work_id, vendor_id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@PutMapping("/workend")
	public ResponseEntity<ResponseStructure<Work>> endWork(@RequestParam int work_id, @RequestParam int vendor_id) {
		return workService.endDate(work_id, vendor_id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@GetMapping("/work")
	public ResponseEntity<ResponseStructure<Work>> getById(@RequestParam int w_id) {
		return workService.getById(w_id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5501")
	@GetMapping("/work/all")
	public ResponseEntity<ResponseStructure<List<Work>>> listOfWorks(@RequestParam int v_id) {
		return workService.listOfWorks(v_id);
	}

}

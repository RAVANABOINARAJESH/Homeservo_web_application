package com.jsp.HomeServo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.HomeServo.dto.Work;
import com.jsp.HomeServo.repository.WorkRepository;

@Repository
public class WorkDao {
	@Autowired
	WorkRepository workRepository;

	public Work saveWork(Work work) {
		return workRepository.save(work);
	}

	public Work updateWork(Work work) {
		Optional<Work> optional = workRepository.findById(work.getId());
		if (optional.isPresent()) {
			Work work1 = workRepository.findById(work.getId()).get();
			if (work.getAddress() == null) {
				work.setAddress(work1.getAddress());
			}
			if (work.getCost() == null) {
				work.setCost(work1.getCost());
			}
			if (work.getCustomer() == null) {
				work.setCustomer(work1.getCustomer());
			}

			if (work.getWorkType() == null) {
				work.setWorkType(work1.getWorkType());
			}
			if (work.getStartDate() == null) {
				work.setStartDate(work1.getStartDate());
			}
			if (work.getEndDate() == null) {
				work.setEndDate(work1.getEndDate());
			}

			return workRepository.save(work);
		} else {
			return null;
		}

	}

	public Work getById(int id) {
		Optional<Work> optional = workRepository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	public List<Work> listOfWorks() {
		List<Work> list = workRepository.listOfWorks();
		if (list != null) {
			return list;
		} else {
			return null;
		}
	}

}

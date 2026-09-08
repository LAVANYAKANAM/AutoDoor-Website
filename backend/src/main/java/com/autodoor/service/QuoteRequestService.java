package com.autodoor.service;

import com.autodoor.dto.QuoteRequestDTO;
import com.autodoor.entity.QuoteRequest;
import com.autodoor.exception.ResourceNotFoundException;
import com.autodoor.repository.QuoteRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteRequestService {

    private final QuoteRequestRepository repository;

    public QuoteRequestService(QuoteRequestRepository repository) {
        this.repository = repository;
    }

    public QuoteRequest create(QuoteRequestDTO dto) {
        QuoteRequest q = new QuoteRequest();
        q.setName(dto.getName());
        q.setPhone(dto.getPhone());
        q.setEmail(dto.getEmail());
        q.setCompany(dto.getCompany());
        q.setLocation(dto.getLocation());
        q.setProduct(dto.getProduct());
        q.setProjectType(dto.getProjectType());
        q.setMessage(dto.getMessage());
        return repository.save(q);
    }

    public List<QuoteRequest> getAll() {
        return repository.findAllByOrderByCreatedAtDesc();
    }

    public QuoteRequest getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Quote request not found with id: " + id));
    }

    public QuoteRequest updateStatus(Long id, String status) {
        QuoteRequest q = getById(id);
        q.setStatus(QuoteRequest.QuoteStatus.valueOf(status.toUpperCase()));
        return repository.save(q);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}

package com.autodoor.controller;

import com.autodoor.dto.QuoteRequestDTO;
import com.autodoor.entity.QuoteRequest;
import com.autodoor.service.QuoteRequestService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/quotes")
public class QuoteRequestController {

    private final QuoteRequestService service;

    public QuoteRequestController(QuoteRequestService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<QuoteRequest> create(@Valid @RequestBody QuoteRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<QuoteRequest>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuoteRequest> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<QuoteRequest> updateStatus(@PathVariable Long id,
                                                      @RequestBody Map<String, String> body) {
        return ResponseEntity.ok(service.updateStatus(id, body.get("status")));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

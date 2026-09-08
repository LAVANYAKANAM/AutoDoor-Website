package com.autodoor.repository;

import com.autodoor.entity.QuoteRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface QuoteRequestRepository extends JpaRepository<QuoteRequest, Long> {
    List<QuoteRequest> findByStatusOrderByCreatedAtDesc(QuoteRequest.QuoteStatus status);
    List<QuoteRequest> findAllByOrderByCreatedAtDesc();
}

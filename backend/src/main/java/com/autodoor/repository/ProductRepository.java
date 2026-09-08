package com.autodoor.repository;

import com.autodoor.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryAndActiveTrue(String category);
    List<Product> findByActiveTrue();
}

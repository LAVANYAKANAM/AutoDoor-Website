package com.autodoor.service;

import com.autodoor.dto.ProductDTO;
import com.autodoor.entity.Product;
import com.autodoor.exception.ResourceNotFoundException;
import com.autodoor.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product create(ProductDTO dto) {
        return repository.save(mapToEntity(new Product(), dto));
    }

    public List<Product> getAll() {
        return repository.findByActiveTrue();
    }

    public Product getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
    }

    public Product update(Long id, ProductDTO dto) {
        return repository.save(mapToEntity(getById(id), dto));
    }

    public void delete(Long id) {
        Product p = getById(id);
        p.setActive(false);
        repository.save(p);
    }

    private Product mapToEntity(Product p, ProductDTO dto) {
        p.setName(dto.getName());
        p.setCategory(dto.getCategory());
        p.setDescription(dto.getDescription());
        p.setImageUrl(dto.getImageUrl());
        p.setFeatures(dto.getFeatures());
        p.setApplications(dto.getApplications());
        p.setActive(dto.isActive());
        return p;
    }
}

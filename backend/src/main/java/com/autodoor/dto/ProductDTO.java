package com.autodoor.dto;

import jakarta.validation.constraints.NotBlank;

public class ProductDTO {

    @NotBlank(message = "Product name is required")
    private String name;

    @NotBlank(message = "Category is required")
    private String category;

    private String description;
    private String imageUrl;
    private String features;
    private String applications;
    private boolean active = true;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    public String getFeatures() { return features; }
    public void setFeatures(String features) { this.features = features; }
    public String getApplications() { return applications; }
    public void setApplications(String applications) { this.applications = applications; }
    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }
}

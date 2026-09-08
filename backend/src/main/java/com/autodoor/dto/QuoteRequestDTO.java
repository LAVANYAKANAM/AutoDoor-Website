package com.autodoor.dto;

import jakarta.validation.constraints.NotBlank;

public class QuoteRequestDTO {

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Phone is required")
    private String phone;

    private String email;
    private String company;

    @NotBlank(message = "Location is required")
    private String location;

    @NotBlank(message = "Product is required")
    private String product;

    private String projectType;
    private String message;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getProduct() { return product; }
    public void setProduct(String product) { this.product = product; }
    public String getProjectType() { return projectType; }
    public void setProjectType(String projectType) { this.projectType = projectType; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}

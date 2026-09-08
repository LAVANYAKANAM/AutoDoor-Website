# 🚪 AutoDoor — Smart Door & Window Automation Website

A full-stack professional business website for an automatic door and window automation company in India.

## 🌐 Live Preview
Open `frontend/index.html` in your browser to view the website.

## ✨ Features
- Hero section with call-to-action buttons
- Product catalog with category filtering (Doors, Windows, Shutters, Access Automation)
- Services section
- Applications showcase
- Project gallery with filter
- Quote request form connected to backend API
- WhatsApp floating button
- Fully responsive mobile-friendly design

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript, Bootstrap 5 |
| Backend | Java 21, Spring Boot 3.3.5, Spring MVC |
| Database | MySQL 8.0 |
| ORM | Spring Data JPA / Hibernate |
| Build | Maven |

## 📁 Project Structure
```
AutoDoor/
├── frontend/
│   ├── index.html
│   ├── css/style.css
│   └── js/
│       ├── data.js       # Products, services, gallery data
│       └── main.js       # Dynamic rendering & form handling
└── backend/
    ├── pom.xml
    └── src/main/java/com/autodoor/
        ├── controller/   # REST API endpoints
        ├── service/      # Business logic
        ├── repository/   # Database access
        ├── entity/       # JPA entities
        ├── dto/          # Data transfer objects
        ├── exception/    # Global exception handling
        └── config/       # CORS configuration
```

## 🗄 Database Setup
```sql
CREATE DATABASE autodoor_db;
```
Tables are auto-created by Hibernate on first run.

## ⚙️ Backend Setup

1. Create `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/autodoor_db?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

2. Run the backend:
```bash
mvn spring-boot:run
```
Backend runs at: `http://localhost:8080`

## 🌍 Frontend Setup
Open `frontend/index.html` directly in a browser — no build step needed.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/quotes | Submit quote request |
| GET | /api/quotes | Get all quotes |
| PATCH | /api/quotes/{id}/status | Update quote status |
| GET | /api/products | Get all products |
| POST | /api/products | Add a product |
| PUT | /api/products/{id} | Update a product |
| DELETE | /api/products/{id} | Delete a product |
| POST | /api/contact | Submit contact message |
| GET | /api/contact | Get all messages |

## 🎨 Customization
Replace the following with your client's actual details:
- Company name → search `AutoDoor`
- Phone → search `+91 98765 43210`
- Email → search `info@autodoor.in`
- Address → search `Bengaluru, Karnataka`
- Product images → update URLs in `frontend/js/data.js`

## 📸 Pages
- Home (Hero + Stats + Why Choose Us)
- About Us
- Products & Solutions
- Services
- Applications
- Projects Gallery
- Contact / Get a Quote

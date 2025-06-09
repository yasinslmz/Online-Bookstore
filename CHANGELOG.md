# Changelog

All notable changes to the Bookshop Web Application will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive project documentation
- API documentation with detailed endpoints
- Contributing guidelines
- MIT License
- This changelog file

### Planned
- Unit tests for frontend and backend
- Docker containerization
- CI/CD pipeline with GitHub Actions
- Email notifications for orders
- Product reviews and ratings system
- Wishlist functionality
- Admin dashboard
- Payment gateway integration

## [1.0.0] - 2024-01-14

### Added
- **Frontend (React)**
  - User registration and authentication system
  - Product catalog with category filtering
  - Shopping cart functionality
  - Checkout process with billing information
  - User account management
  - Order history tracking
  - Blog reading functionality
  - Responsive design for mobile and desktop
  - Redux state management

- **Backend (ASP.NET Core Web API)**
  - RESTful API endpoints
  - JWT-based authentication
  - Entity Framework Core with SQL Server
  - Product management system
  - Category management
  - User management
  - Order processing
  - Blog content management
  - CORS configuration

- **Database**
  - SQL Server database schema
  - Sample data for products, categories, and blog posts
  - User and billing information tables
  - Order tracking system

### Database Schema
- `User` table for user management
- `Product` table with book information
- `Category` table for product categorization
- `Billing` table for order information
- `SoldProduct` table for order details
- `Blog` table for content management

### API Endpoints
- Authentication endpoints (`/api/Login`, `/api/Auth`)
- Product endpoints (`/api/Product`)
- Category endpoints (`/api/Category`)
- Blog endpoints (`/api/Blog`)

### Frontend Features
- **Pages**
  - Home page with featured products
  - Product catalog with filtering
  - Product detail pages
  - Shopping cart
  - Checkout process
  - User authentication (Login/Register)
  - User account management
  - Blog listing and detail pages
  - Contact page

- **Components**
  - Reusable UI components
  - Navigation system
  - Product cards
  - Shopping cart components
  - Form components

### Technical Implementation
- **Frontend Tech Stack**
  - React 18.2.0
  - React Router DOM 6.21.1
  - Redux Toolkit 2.0.1
  - React Redux 9.0.4

- **Backend Tech Stack**
  - ASP.NET Core Web API
  - Entity Framework Core
  - SQL Server
  - JWT Authentication

### Initial Release Notes
This is the first stable release of the Bookshop Web Application. The application provides a complete e-commerce solution for book sales with the following core features:

1. **User Management**: Registration, login, and profile management
2. **Product Catalog**: Browse books by categories with detailed information
3. **Shopping Experience**: Add to cart, checkout, and order tracking
4. **Content Management**: Blog functionality for book-related content
5. **Responsive Design**: Works on desktop and mobile devices

### Known Issues
- API endpoints require manual configuration of localhost URLs
- Limited error handling in some frontend components
- No automated tests implemented
- No deployment configuration

### Setup Requirements
- Node.js v14+ for frontend development
- .NET 6.0 SDK for backend development
- SQL Server for database
- Manual database setup using provided SQL script

---

## Version History Summary

- **v1.0.0** (2024-01-14): Initial release with core e-commerce functionality
- **Documentation Update** (2024-01): Added comprehensive documentation

---

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Authors

- **Yasin Çağrı Solmaz** - *Initial work* - [yasinslmz](https://github.com/yasinslmz)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
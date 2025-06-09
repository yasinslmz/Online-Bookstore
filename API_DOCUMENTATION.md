# API Documentation

This document provides comprehensive information about the Bookshop Web API endpoints.

## Base URL

```
https://localhost:7247/api
```

## Authentication

The API uses JWT (JSON Web Token) based authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Response Format

All API responses follow this standard format:

```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "errors": []
}
```

## Endpoints

### Authentication Endpoints

#### POST /api/Login/Register
Register a new user account.

**Request Body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "userName": "string",
  "phone": "string",
  "agreeTerms": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "userName": "johndoe"
  }
}
```

#### POST /api/Login/Login
User login to get authentication token.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "userName": "johndoe"
    }
  }
}
```

#### POST /api/Auth/GenerateToken
Generate JWT token for authenticated user.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiration": "2024-12-31T23:59:59Z"
}
```

---

### Product Endpoints

#### GET /api/Product
Get all products with pagination support.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search term for product name or author

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 25.99,
      "stock": 100,
      "categoryId": 1,
      "isStatus": true,
      "imagePath": "https://example.com/image.jpg",
      "author": "Author Name",
      "pageCount": 300,
      "count": 0,
      "slug": "product-slug",
      "language": "English"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50
  }
}
```

#### GET /api/Product/{id}
Get a specific product by ID.

**Path Parameters:**
- `id`: Product ID (integer)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Product Name",
    "price": 25.99,
    "stock": 100,
    "categoryId": 1,
    "category": {
      "id": 1,
      "name": "Category Name",
      "slug": "category-slug"
    },
    "isStatus": true,
    "imagePath": "https://example.com/image.jpg",
    "author": "Author Name",
    "pageCount": 300,
    "count": 0,
    "slug": "product-slug",
    "language": "English"
  }
}
```

#### GET /api/Product/category/{categoryId}
Get products by category ID.

**Path Parameters:**
- `categoryId`: Category ID (integer)

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 25.99,
      "stock": 100,
      "categoryId": 1,
      "isStatus": true,
      "imagePath": "https://example.com/image.jpg",
      "author": "Author Name",
      "pageCount": 300,
      "slug": "product-slug",
      "language": "English"
    }
  ]
}
```

#### POST /api/Product/AddBilling
Create a new order with billing information.

**🔒 Requires Authentication**

**Request Body:**
```json
{
  "userId": 1,
  "country": "Turkey",
  "firstName": "John",
  "lastName": "Doe",
  "companyName": "Company Inc.",
  "address": "123 Main St",
  "apartment": "Apt 4B",
  "city": "Istanbul",
  "state": "Istanbul",
  "postcode": "34000",
  "email": "john@example.com",
  "phone": "+90 555 123 4567",
  "products": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 1
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 123,
    "userId": 1,
    "totalAmount": 75.99,
    "isApproved": false,
    "createdDate": "2024-01-15T10:30:00Z",
    "products": [
      {
        "productId": 1,
        "productName": "Product 1",
        "quantity": 2,
        "price": 25.99
      }
    ]
  },
  "message": "Order created successfully"
}
```

#### GET /api/Product/GetBillingByUserId/{userId}
Get all orders for a specific user.

**🔒 Requires Authentication**

**Path Parameters:**
- `userId`: User ID (integer)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 123,
      "userId": 1,
      "country": "Turkey",
      "firstName": "John",
      "lastName": "Doe",
      "totalAmount": 75.99,
      "isApproved": true,
      "createdDate": "2024-01-15T10:30:00Z",
      "products": [
        {
          "productId": 1,
          "productName": "Product 1",
          "quantity": 2,
          "price": 25.99
        }
      ]
    }
  ]
}
```

---

### Category Endpoints

#### GET /api/Category
Get all categories.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Comics Books",
      "slug": "com",
      "isStatus": true,
      "productCount": 15
    },
    {
      "id": 2,
      "name": "Arts & Photography Books",
      "slug": "Arts",
      "isStatus": true,
      "productCount": 8
    }
  ]
}
```

#### GET /api/Category/{id}
Get a specific category by ID.

**Path Parameters:**
- `id`: Category ID (integer)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Comics Books",
    "slug": "com",
    "isStatus": true,
    "products": [
      {
        "id": 1,
        "name": "Product Name",
        "price": 25.99,
        "imagePath": "https://example.com/image.jpg"
      }
    ]
  }
}
```

---

### Blog Endpoints

#### GET /api/Blog
Get all blog posts.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Blog Post Title",
      "content": "Blog post content...",
      "imagePath": "https://example.com/blog-image.jpg",
      "createdDate": "2024-01-15T10:30:00Z",
      "author": "Admin"
    }
  ]
}
```

#### GET /api/Blog/{id}
Get a specific blog post by ID.

**Path Parameters:**
- `id`: Blog post ID (integer)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Blog Post Title",
    "content": "Full blog post content...",
    "imagePath": "https://example.com/blog-image.jpg",
    "createdDate": "2024-01-15T10:30:00Z",
    "author": "Admin",
    "tags": ["book", "review", "literature"]
  }
}
```

---

## Error Handling

### HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

### Error Response Format

```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ],
  "statusCode": 400
}
```

### Common Error Messages

#### Authentication Errors

```json
{
  "success": false,
  "message": "Invalid credentials",
  "statusCode": 401
}
```

#### Validation Errors

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "password",
      "message": "Password must be at least 6 characters"
    }
  ],
  "statusCode": 400
}
```

#### Not Found Errors

```json
{
  "success": false,
  "message": "Product not found",
  "statusCode": 404
}
```

---

## Rate Limiting

The API implements rate limiting to prevent abuse:

- **General endpoints**: 100 requests per minute per IP
- **Authentication endpoints**: 10 requests per minute per IP
- **Order creation**: 5 requests per minute per user

## CORS Policy

The API supports Cross-Origin Resource Sharing (CORS) for the following origins:

- `http://localhost:3000` (React development server)
- `https://yourdomain.com` (Production frontend)

## Database Schema

### Key Tables

#### Users Table
```sql
CREATE TABLE [User] (
    [Id] int IDENTITY(1,1) PRIMARY KEY,
    [firstName] nvarchar(max) NOT NULL,
    [lastName] nvarchar(max) NOT NULL,
    [email] nvarchar(max) NOT NULL,
    [password] nvarchar(max) NOT NULL,
    [userName] nvarchar(max) NOT NULL,
    [phone] nvarchar(max) NOT NULL,
    [agreeTerms] bit NOT NULL
);
```

#### Products Table  
```sql
CREATE TABLE [Product] (
    [Id] int IDENTITY(1,1) PRIMARY KEY,
    [Name] nvarchar(max) NOT NULL,
    [Price] decimal(18,2) NOT NULL,
    [Stock] int NOT NULL,
    [CategoryId] int NOT NULL,
    [IsStatus] bit NOT NULL,
    [imagePath] nvarchar(max) NOT NULL,
    [Author] nvarchar(max) NOT NULL,
    [PageCount] int NOT NULL,
    [Language] nvarchar(max) NOT NULL
);
```

#### Billing Table
```sql
CREATE TABLE [Billing] (
    [id] int IDENTITY(1,1) PRIMARY KEY,
    [userId] int NOT NULL,
    [country] nvarchar(max) NOT NULL,
    [firstName] nvarchar(max) NOT NULL,
    [lastName] nvarchar(max) NOT NULL,
    [email] nvarchar(max) NOT NULL,
    [phone] nvarchar(max) NOT NULL,
    [isApproved] bit NOT NULL
);
```

---

## Testing

### Using Postman

1. Import the Postman collection: [Download Collection](postman_collection.json)
2. Set the base URL variable to your API endpoint
3. For authenticated endpoints, first call the login endpoint to get a token
4. Add the token to the Authorization header for protected endpoints

### cURL Examples

#### Register a new user:
```bash
curl -X POST https://localhost:7247/api/Login/Register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "userName": "johndoe",
    "phone": "+1234567890",
    "agreeTerms": true
  }'
```

#### Get all products:
```bash
curl -X GET https://localhost:7247/api/Product \
  -H "Content-Type: application/json"
```

#### Create an order (requires authentication):
```bash
curl -X POST https://localhost:7247/api/Product/AddBilling \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "userId": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "country": "USA",
    "city": "New York",
    "address": "123 Main St"
  }'
```

---

## Support

For API support, please:

1. Check this documentation first
2. Review the [GitHub Issues](https://github.com/yasinslmz/React_TrainAndWork_Assignment3/issues)
3. Create a new issue with detailed information about your problem

---

*Last updated: January 2024* 
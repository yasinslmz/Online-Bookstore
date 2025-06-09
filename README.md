# Bookstore Web Application

A full-stack e-commerce bookstore application built with React frontend and ASP.NET Core Web API backend.

## 🚀 Live Demo

[View Live Demo](https://github.com/yasinslmz/React_TrainAndWork_Assignment3) 

## 📖 Overview

This project is a modern bookstore web application that allows users to:
- Browse books by categories
- View detailed product information
- Add books to shopping cart
- User registration and authentication
- Complete purchase with billing information
- View order history and account details
- Read blog articles about books

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **React Router DOM** 6.21.1 - Client-side routing
- **Redux Toolkit** 2.0.1 - State management
- **React Redux** 9.0.4 - React bindings for Redux

### Backend
- **ASP.NET Core** - Web API framework
- **Entity Framework Core** - ORM
- **SQL Server** - Database
- **JWT Authentication** - User authentication

## 📁 Project Structure

```
React_TrainAndWork_Assignment3/
├── bookshop/bookshop/          # React Frontend
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── redux/             # Redux store and slices
│   │   └── app/               # App configuration
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
├── BookshopApii/              # ASP.NET Core Backend
│   └── ProductManagementWebApi/
│       ├── Controllers/       # API controllers
│       ├── Models/           # Data models and DTOs
│       ├── Data/             # Database context
│       ├── Migrations/       # EF Core migrations
│       └── Services/         # Business logic services
├── KTDB.sql                   # Database script
└── README.md                  # This file
```

## 🏗️ Architecture

The application follows a modern full-stack architecture:

- **Frontend**: React SPA with Redux for state management
- **Backend**: RESTful API built with ASP.NET Core
- **Database**: SQL Server with Entity Framework Core
- **Authentication**: JWT-based authentication system

## ⚡ Quick Start

### Prerequisites

- **Node.js** (v14 or higher)
- **.NET 6.0 SDK** or higher
- **SQL Server** (Local DB or SQL Server Express)
- **Visual Studio** or **VS Code**

### Database Setup

1. Create a new database called `KTStore` in SQL Server
2. Execute the `KTDB.sql` script to create tables and insert sample data:
   ```sql
   -- Execute KTDB.sql in SQL Server Management Studio
   ```

### Backend Setup

1. Navigate to the API project directory:
   ```bash
   cd BookshopApii/ProductManagementWebApi
   ```

2. Restore NuGet packages:
   ```bash
   dotnet restore
   ```

3. Update connection string in `appsettings.json`:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=KTStore;Trusted_Connection=true;"
     }
   }
   ```

4. Run the API:
   ```bash
   dotnet run
   ```
   
   The API will start at `https://localhost:7247` (or another port)

### Frontend Setup

1. Navigate to the React project directory:
   ```bash
   cd bookshop/bookshop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **Important**: Update API endpoints in the following files with your API URL:
   - `src/pages/App.js`
   - `src/pages/Checkout.js`
   - `src/pages/Login.js`
   - `src/pages/Register.js`
   
   Replace `https://localhost:7247` with your actual API URL.

4. Start the development server:
   ```bash
   npm start
   ```
   
   The application will open at `http://localhost:3000`

## 🔌 API Endpoints

### Authentication
- `POST /api/Login/Register` - User registration
- `POST /api/Login/Login` - User login
- `POST /api/Auth/GenerateToken` - Generate JWT token

### Products
- `GET /api/Product` - Get all products
- `GET /api/Product/{id}` - Get product by ID
- `GET /api/Product/category/{categoryId}` - Get products by category

### Categories
- `GET /api/Category` - Get all categories
- `GET /api/Category/{id}` - Get category by ID

### Orders & Billing
- `POST /api/Product/AddBilling` - Create new order
- `GET /api/Product/GetBillingByUserId/{userId}` - Get user orders

### Blog
- `GET /api/Blog` - Get all blog posts
- `GET /api/Blog/{id}` - Get blog post by ID

## 📱 Features

### User Features
- ✅ User registration and login
- ✅ Browse books by categories
- ✅ Product search and filtering
- ✅ Shopping cart functionality
- ✅ Secure checkout process
- ✅ Order history tracking
- ✅ User account management
- ✅ Blog reading

### Admin Features
- ✅ Product management (via API)
- ✅ Category management
- ✅ Order processing
- ✅ Blog management

## 🔧 Development

### Adding New Features

1. **Frontend**: Add new components in `src/components/` or new pages in `src/pages/`
2. **Backend**: Add new controllers in `Controllers/` and models in `Models/`
3. **Database**: Create migrations using Entity Framework Core

### Testing

```bash
# Frontend tests
cd bookshop/bookshop
npm test

# Backend tests
cd BookshopApii/ProductManagementWebApi
dotnet test
```

## 🔐 Security

⚠️ **Important**: This project uses placeholder values for sensitive information. See [SECURITY.md](SECURITY.md) for proper configuration.

- Replace JWT secret keys
- Update database connection strings
- Use environment variables for production
- Implement proper password hashing

## 🐳 Docker Deployment

```bash
# Run with Docker Compose
docker-compose up --build
```

Access the application:
- Frontend: http://localhost:3000
- API: http://localhost:7247
- Database: localhost:1433

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Yasin Çağrı Solmaz** - *Initial work* - [yasinslmz](https://github.com/yasinslmz)

## 🙏 Acknowledgments

- React team for the amazing frontend library
- Microsoft for ASP.NET Core framework
- All open source contributors

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/yasinslmz/React_TrainAndWork_Assignment3/issues) page
2. Read the [Documentation](API_DOCUMENTATION.md)
3. Review the [Security Guide](SECURITY.md)
4. Create a new issue if your problem isn't already listed

## 📈 Roadmap

- [ ] Add unit tests for frontend and backend
- [ ] Implement Docker containerization
- [ ] Add CI/CD pipeline
- [ ] Implement email notifications
- [ ] Add product reviews and ratings
- [ ] Implement wishlist functionality
- [ ] Add admin dashboard
- [ ] Implement payment gateway integration

---

⭐ **Don't forget to star this repository if you found it helpful!** 
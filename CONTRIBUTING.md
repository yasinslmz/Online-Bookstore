# Contributing to Bookshop Web Application

We welcome contributions to the Bookshop Web Application! This document provides guidelines for contributing to the project.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the issue template** when available
3. **Provide detailed information** including:
   - Steps to reproduce the problem
   - Expected vs actual behavior
   - Environment details (OS, browser, Node.js version, etc.)
   - Screenshots or error messages if applicable

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

1. Check if the enhancement has already been suggested
2. Provide a clear description of the proposed feature
3. Explain why this enhancement would be useful
4. Include mockups or examples if applicable

## 🛠️ Development Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **.NET 6.0 SDK** or higher
- **SQL Server** (Local DB or SQL Server Express)
- **Git**
- **Visual Studio Code** or **Visual Studio**

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/your-username/React_TrainAndWork_Assignment3.git
   cd React_TrainAndWork_Assignment3
   ```

3. **Set up the database:**
   ```sql
   -- Create database 'KTStore' in SQL Server
   -- Execute KTDB.sql script
   ```

4. **Set up the backend:**
   ```bash
   cd BookshopApi/ProductManagementWebApi
   dotnet restore
   dotnet run
   ```

5. **Set up the frontend:**
   ```bash
   cd bookshop/bookshop
   npm install
   npm start
   ```

6. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Coding Standards

### Frontend (React)

#### Code Style
- Use **functional components** with hooks
- Use **ES6+ syntax**
- Follow **camelCase** naming convention
- Use **meaningful variable and function names**
- Add **JSDoc comments** for complex functions

#### Example:
```javascript
/**
 * Handles user login process
 * @param {Object} credentials - User email and password
 * @returns {Promise} Login response
 */
const handleLogin = async (credentials) => {
  try {
    const response = await authService.login(credentials);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
```

#### File Organization
- Components in `src/components/`
- Pages in `src/pages/`
- Redux logic in `src/redux/`
- Utilities in `src/utils/`
- Constants in `src/constants/`

#### React Best Practices
- Use **useState** and **useEffect** appropriately
- Implement **error boundaries** for error handling
- Use **React.memo** for performance optimization when needed
- Follow **single responsibility principle**

### Backend (ASP.NET Core)

#### Code Style
- Use **PascalCase** for classes, methods, and properties
- Use **camelCase** for parameters and local variables
- Add **XML documentation** for public methods
- Follow **SOLID principles**

#### Example:
```csharp
/// <summary>
/// Retrieves a product by its identifier
/// </summary>
/// <param name="id">Product identifier</param>
/// <returns>Product details or null if not found</returns>
public async Task<Product> GetProductByIdAsync(int id)
{
    return await _context.Products
        .Include(p => p.Category)
        .FirstOrDefaultAsync(p => p.Id == id);
}
```

#### Project Structure
- **Controllers/** - API controllers
- **Models/** - Data models and DTOs
- **Services/** - Business logic
- **Data/** - Database context and configurations
- **Migrations/** - EF Core migrations

#### API Best Practices
- Use **async/await** for database operations
- Implement **proper error handling**
- Use **DTOs** for request/response models
- Follow **RESTful** conventions
- Add **input validation**

## 🧪 Testing

### Frontend Testing

Run tests before submitting:
```bash
cd bookshop/bookshop
npm test
```

#### Writing Tests
- Use **Jest** and **React Testing Library**
- Test **user interactions** and **component behavior**
- Aim for **meaningful test coverage**

Example:
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('should display error message for invalid credentials', async () => {
  render(<LoginForm />);
  
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'invalid@email.com' }
  });
  
  fireEvent.click(screen.getByRole('button', { name: /login/i }));
  
  expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
});
```

### Backend Testing

```bash
cd BookshopApi/ProductManagementWebApi
dotnet test
```

#### Writing Tests
- Use **xUnit** framework
- Test **business logic** and **API endpoints**
- Use **in-memory database** for testing

Example:
```csharp
[Fact]
public async Task GetProductById_ReturnsProduct_WhenProductExists()
{
    // Arrange
    var productId = 1;
    var expectedProduct = new Product { Id = productId, Name = "Test Book" };
    
    // Act
    var result = await _productService.GetProductByIdAsync(productId);
    
    // Assert
    Assert.NotNull(result);
    Assert.Equal(expectedProduct.Name, result.Name);
}
```

## 📋 Pull Request Process

### Before Submitting

1. **Test your changes** thoroughly
2. **Update documentation** if needed
3. **Check code style** and formatting
4. **Ensure all tests pass**
5. **Update the changelog** if applicable

### Pull Request Guidelines

1. **Create a descriptive title:**
   - Good: `Add user authentication validation`
   - Bad: `Fix bug`

2. **Write a clear description:**
   ```markdown
   ## What does this PR do?
   Brief description of the changes
   
   ## Why was this change needed?
   Explain the problem or feature request
   
   ## How was it implemented?
   Technical details of the implementation
   
   ## Testing
   How to test the changes
   
   ## Screenshots (if applicable)
   Visual proof of the changes
   ```

3. **Link related issues:**
   ```markdown
   Closes #123
   Fixes #456
   ```

4. **Request appropriate reviewers**

### Review Process

- Pull requests require **at least one approval**
- Address **all review comments**
- **Update your branch** if conflicts arise
- **Squash commits** before merging if requested

## 🚀 Deployment

### Frontend Deployment

1. **Build the production version:**
   ```bash
   cd bookshop/bookshop
   npm run build
   ```

2. **Deploy to hosting service** (Netlify, Vercel, etc.)

### Backend Deployment

1. **Publish the API:**
   ```bash
   cd BookshopApi/ProductManagementWebApi
   dotnet publish -c Release
   ```

2. **Deploy to hosting service** (Azure, AWS, etc.)

## 📚 Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [ASP.NET Core Documentation](https://docs.microsoft.com/en-us/aspnet/core)
- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core)

### Tools
- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/) - API testing
- [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms)

## 🏷️ Issue and PR Labels

We use the following labels to categorize issues and PRs:

### Type Labels
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `maintenance` - Code maintenance and refactoring

### Priority Labels
- `priority: high` - High priority
- `priority: medium` - Medium priority  
- `priority: low` - Low priority

### Status Labels
- `status: needs review` - Needs code review
- `status: in progress` - Currently being worked on
- `status: blocked` - Blocked by other issues

### Area Labels
- `area: frontend` - React frontend changes
- `area: backend` - ASP.NET Core API changes
- `area: database` - Database related changes
- `area: deployment` - Deployment and DevOps

## 💬 Communication

### Getting Help

- **GitHub Issues** - For bug reports and feature requests
- **GitHub Discussions** - For general questions and discussions
- **Email** - For sensitive issues: [maintainer@example.com]

### Community Guidelines

- **Be respectful** and professional
- **Be patient** with maintainers and contributors
- **Provide constructive feedback**
- **Help others** when possible
- **Follow the code of conduct**

## 🎉 Recognition

Contributors are recognized in:

- **README.md** contributors section
- **CHANGELOG.md** for significant contributions
- **GitHub repository** insights and statistics

Thank you for your interest in contributing to the Bookshop Web Application! 🚀

---

*For questions about contributing, please create an issue or start a discussion.* 
# Environment Configuration Guide

This document explains how to configure environment variables for the Bookshop Web Application.

## Overview

The application uses environment variables to manage configuration settings for different environments (development, staging, production). This approach allows you to keep sensitive information like database connection strings and API keys out of your source code.

## Frontend Environment Variables (React)

Create a `.env` file in the `bookshop/bookshop/` directory:

```bash
# React App Configuration
REACT_APP_API_BASE_URL=https://localhost:7247/api
REACT_APP_APP_NAME=Bookshop
REACT_APP_VERSION=1.0.0
REACT_APP_ENV=development
REACT_APP_DEBUG=true
```

### Available Frontend Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_BASE_URL` | Backend API base URL | `https://localhost:7247/api` |
| `REACT_APP_APP_NAME` | Application name | `Bookshop` |
| `REACT_APP_VERSION` | Application version | `1.0.0` |
| `REACT_APP_ENV` | Environment name | `development` |
| `REACT_APP_DEBUG` | Enable debug mode | `true` |

### Usage in React Components

```javascript
const apiUrl = process.env.REACT_APP_API_BASE_URL;
const appName = process.env.REACT_APP_APP_NAME;

// Use in API calls
const response = await fetch(`${apiUrl}/products`);
```

## Backend Environment Variables (ASP.NET Core)

### Using appsettings.json

Update the `appsettings.json` file in `BookshopApi/ProductManagementWebApi/`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=KTStore;Trusted_Connection=true;"
  },
  "Jwt": {
    "SecretKey": "your-super-secret-jwt-key-change-this-in-production",
    "Issuer": "BookshopAPI",
    "Audience": "BookshopClient",
    "ExpirationHours": 24
  },
  "Cors": {
    "AllowedOrigins": ["http://localhost:3000", "https://localhost:3001"]
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### Using Environment Variables

Set these environment variables in your system or development environment:

```bash
# Database Configuration
SQLSERVER_CONNECTION_STRING="Server=localhost;Database=KTStore;Trusted_Connection=true;"

# JWT Configuration  
JWT_SECRET_KEY="your-super-secret-jwt-key-change-this-in-production"
JWT_ISSUER="BookshopAPI"
JWT_AUDIENCE="BookshopClient"
JWT_EXPIRATION_HOURS="24"

# API Configuration
ASPNETCORE_ENVIRONMENT="Development"
ASPNETCORE_URLS="https://localhost:7247;http://localhost:7248"
```

### Using in ASP.NET Core Code

```csharp
// Read from configuration
var connectionString = configuration.GetConnectionString("DefaultConnection");
var jwtKey = configuration["Jwt:SecretKey"];

// Read from environment variables
var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
```

## Development Environment Setup

### 1. Frontend Setup

```bash
cd bookshop/bookshop
cp .env.example .env  # Create from template
# Edit .env file with your settings
npm install
npm start
```

### 2. Backend Setup

```bash
cd BookshopApi/ProductManagementWebApi
# Update appsettings.json with your database connection
dotnet restore
dotnet run
```

### 3. Database Setup

1. Create database in SQL Server:
   ```sql
   CREATE DATABASE KTStore;
   ```

2. Execute the database script:
   ```bash
   # Run KTDB.sql in SQL Server Management Studio
   ```

3. Update connection string in `appsettings.json`:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=YOUR_SERVER;Database=KTStore;User Id=YOUR_USER;Password=YOUR_PASSWORD;"
     }
   }
   ```

## Production Environment

### Security Considerations

1. **Never commit sensitive information** to version control
2. **Use strong, unique passwords** for production
3. **Enable HTTPS** in production
4. **Use secure JWT keys** (minimum 256 bits)
5. **Restrict CORS origins** to your production domain

### Production Configuration

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Production connection string from Azure Key Vault"
  },
  "Jwt": {
    "SecretKey": "Production JWT key from Azure Key Vault",
    "Issuer": "https://your-production-domain.com",
    "Audience": "BookshopClient"
  },
  "Cors": {
    "AllowedOrigins": ["https://your-production-domain.com"]
  }
}
```

### Environment Variables for Production

```bash
ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=https://0.0.0.0:443;http://0.0.0.0:80
SQLSERVER_CONNECTION_STRING="Production database connection string"
JWT_SECRET_KEY="Production JWT secret key"
```

## Docker Configuration

### Docker Compose Environment

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  database:
    image: mcr.microsoft.com/mssql/server:2019-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=YourStrong@Password
      - MSSQL_PID=Express
    ports:
      - "1433:1433"
    volumes:
      - sqldata:/var/opt/mssql

  api:
    build: ./BookshopApi/ProductManagementWebApi
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - ConnectionStrings__DefaultConnection=Server=database;Database=KTStore;User Id=sa;Password=YourStrong@Password;
    ports:
      - "7247:80"
    depends_on:
      - database

  frontend:
    build: ./bookshop/bookshop
    environment:
      - REACT_APP_API_BASE_URL=http://localhost:7247/api
    ports:
      - "3000:3000"
    depends_on:
      - api

volumes:
  sqldata:
```

## Azure Deployment

### Azure App Service Configuration

Set these application settings in Azure Portal:

| Setting | Value |
|---------|-------|
| `ASPNETCORE_ENVIRONMENT` | `Production` |
| `ConnectionStrings__DefaultConnection` | Azure SQL connection string |
| `Jwt__SecretKey` | Production JWT key |
| `Jwt__Issuer` | Your production domain |
| `CORS__AllowedOrigins__0` | Your frontend domain |

### Azure Key Vault Integration

```csharp
// Program.cs
builder.Configuration.AddAzureKeyVault(
    keyVaultUri,
    new DefaultAzureCredential());
```

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check connection string format
   - Verify SQL Server is running
   - Check firewall settings

2. **CORS Errors**
   - Verify frontend URL in CORS configuration
   - Check protocol (http vs https)

3. **JWT Token Issues**
   - Ensure secret key is consistent
   - Check token expiration settings
   - Verify issuer and audience

4. **Environment Variables Not Loading**
   - Restart application after changes
   - Check variable naming (case-sensitive)
   - Verify file location (.env in correct directory)

### Debug Commands

```bash
# Check environment variables
dotnet run --environment Development

# Verify React environment variables
npm run build  # Check console for loaded variables

# Test database connection
dotnet ef database update
```

## Best Practices

1. **Use different configurations** for each environment
2. **Keep sensitive data** in environment variables or key vaults
3. **Document all required variables** in this file
4. **Use validation** to ensure required variables are set
5. **Regular security audits** of configuration settings

## Examples

### Local Development
```bash
# .env (React)
REACT_APP_API_BASE_URL=http://localhost:7247/api

# appsettings.Development.json (API)
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=KTStore;Trusted_Connection=true;"
  }
}
```

### Production
```bash
# Azure App Service Settings
REACT_APP_API_BASE_URL=https://bookshop-api.azurewebsites.net/api
ConnectionStrings__DefaultConnection=Azure SQL connection string
```

---

For questions about environment configuration, please check the [troubleshooting section](#troubleshooting) or create an issue in the repository. 
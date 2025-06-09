# Security Guide

This document outlines security best practices and configuration guidelines for the Bookshop Web Application.

## 🚨 IMPORTANT SECURITY NOTICE

This project template contains **placeholder values** for sensitive information. **DO NOT** use these values in production!

## ⚠️ Required Security Configuration

### 1. Database Connection String

**❌ NEVER do this:**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=MyServer;Database=KTStore;user id=admin;password=123456;"
  }
}
```

**✅ DO this instead:**

#### For Development (Windows Authentication):
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=KTStore;Trusted_Connection=true;"
  }
}
```

#### For Production (Environment Variables):
```bash
# Set in environment variables or Azure Key Vault
ConnectionStrings__DefaultConnection="Server=your-server;Database=KTStore;User Id=your-user;Password=your-secure-password;"
```

### 2. JWT Secret Key

**❌ NEVER use weak keys:**
```json
{
  "AppSettings": {
    "Secret": "mysecret"
  }
}
```

**✅ Generate a strong 256-bit key:**
```bash
# Generate a secure random key (PowerShell)
[System.Web.Security.Membership]::GeneratePassword(64, 10)

# Or use online tools like:
# https://generate-random.org/api-key-generator
```

```json
{
  "AppSettings": {
    "Secret": "Your-Super-Secure-256-Bit-Random-Key-Here-Never-Share-This"
  }
}
```

### 3. Environment-Specific Configuration

#### Local Development Setup

1. **Create your local config file:**
   ```bash
   # Copy the template
   cp appsettings.json appsettings.Local.json
   ```

2. **Update your local values:**
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=KTStore;Trusted_Connection=true;"
     },
     "AppSettings": {
       "Secret": "Your-Local-Development-JWT-Key-Here"
     }
   }
   ```

3. **Add to gitignore** (already done):
   ```gitignore
   appsettings.Local.json
   appsettings.Production.json
   ```

#### Production Deployment

**Use environment variables or Azure Key Vault:**

```bash
# Environment Variables
export ConnectionStrings__DefaultConnection="Your production connection string"
export AppSettings__Secret="Your production JWT secret"

# Or in Azure App Service
az webapp config appsettings set \
  --name your-app-name \
  --resource-group your-rg \
  --settings ConnectionStrings__DefaultConnection="..." AppSettings__Secret="..."
```

## 🔐 Password Security

### Database Passwords in SQL Script

The `KTDB.sql` file contains **sample user passwords** for testing:

```sql
-- These are TEST passwords - change them!
INSERT [dbo].[User] VALUES (1, 'Yasin', 'Solmaz', 'yasin@example.com', '123', 'yasin3', '0555...', 1)
```

**⚠️ Before going live:**
1. Change all default passwords
2. Use strong password hashing (bcrypt, Argon2)
3. Implement password policies

### Recommended Password Hashing

Replace plain text passwords with proper hashing:

```csharp
// Install: Install-Package BCrypt.Net-Next
using BCrypt.Net;

// Hash password
string hashedPassword = BCrypt.HashPassword(plainPassword);

// Verify password
bool isValid = BCrypt.Verify(plainPassword, hashedPassword);
```

## 🛡️ Security Best Practices

### 1. HTTPS Configuration

**Always use HTTPS in production:**

```csharp
// Program.cs
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
    app.UseHsts();
}
```

### 2. CORS Configuration

**Restrict CORS to specific domains:**

```json
{
  "Cors": {
    "AllowedOrigins": [
      "https://your-production-domain.com",
      "https://www.your-production-domain.com"
    ]
  }
}
```

### 3. JWT Configuration

**Use secure JWT settings:**

```json
{
  "AppSettings": {
    "ValidAudience": "YourAppName",
    "ValidIssuer": "https://your-api-domain.com",
    "Secret": "Your-256-bit-secret-key",
    "ExpirationHours": 1
  }
}
```

### 4. Database Security

- Use **connection pooling**
- Enable **SQL Server encryption**
- Implement **parameterized queries** (already done with EF Core)
- Regular **security updates**

## 📝 Configuration Templates

### Development Configuration Template

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=KTStore;Trusted_Connection=true;"
  },
  "AppSettings": {
    "ValidAudience": "BookshopClient",
    "ValidIssuer": "BookshopAPI",
    "Secret": "Development-JWT-Key-256-Bit-Replace-In-Production"
  },
  "AllowedHosts": "*"
}
```

### Production Configuration Template

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning",
      "Microsoft.AspNetCore": "Error"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Use environment variables or Key Vault"
  },
  "AppSettings": {
    "ValidAudience": "ProductionClientApp",
    "ValidIssuer": "https://your-production-api.com",
    "Secret": "Use environment variables or Key Vault"
  },
  "AllowedHosts": "your-production-domain.com"
}
```

## 🔍 Security Checklist

### Before Deployment:

- [ ] Replace all default passwords
- [ ] Generate strong JWT secret (256-bit)
- [ ] Configure proper CORS origins
- [ ] Enable HTTPS/SSL
- [ ] Use environment variables for secrets
- [ ] Implement password hashing
- [ ] Update connection strings
- [ ] Remove debug information
- [ ] Enable security headers
- [ ] Set up monitoring and logging

### Regular Security Maintenance:

- [ ] Update dependencies regularly
- [ ] Monitor security logs
- [ ] Rotate JWT secrets periodically
- [ ] Review user permissions
- [ ] Backup encryption keys
- [ ] Test disaster recovery

## 🚨 Incident Response

If you suspect a security breach:

1. **Immediately change all passwords and secrets**
2. **Review access logs**
3. **Update all authentication tokens**
4. **Notify affected users**
5. **Document the incident**

## 📞 Reporting Security Issues

If you discover a security vulnerability, please:

1. **DO NOT** create a public issue
2. **DO NOT** commit sensitive information
3. **Email** security concerns to: [security@yourproject.com]
4. **Include** detailed reproduction steps

## 📚 Additional Resources

- [OWASP Security Guidelines](https://owasp.org/)
- [ASP.NET Core Security](https://docs.microsoft.com/en-us/aspnet/core/security/)
- [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)

---

**Remember: Security is an ongoing process, not a one-time setup!** 🔐 
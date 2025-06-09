# Deployment Guide

This guide covers various deployment options for the Bookshop Web Application.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Docker Deployment](#docker-deployment)
- [Azure Deployment](#azure-deployment)
- [Manual Server Deployment](#manual-server-deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Environment Configuration](#environment-configuration)
- [Monitoring & Logging](#monitoring--logging)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Software
- **Docker** (for containerized deployment)
- **Node.js** 14+ (for frontend development)
- **.NET 6.0 SDK** (for backend development)
- **SQL Server** (database)
- **Git** (version control)

### Required Accounts
- **Azure Account** (for cloud deployment)
- **GitHub Account** (for CI/CD pipeline)
- **Docker Hub** (for container registry)

## Local Development

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yasinslmz/React_TrainAndWork_Assignment3.git
   cd React_TrainAndWork_Assignment3
   ```

2. **Set up the database:**
   ```sql
   -- Create database in SQL Server
   CREATE DATABASE KTStore;
   -- Execute KTDB.sql script
   ```

3. **Configure the backend:**
   ```bash
   cd BookshopApi/ProductManagementWebApi
   # Update appsettings.json with your database connection
   dotnet restore
   dotnet run
   ```

4. **Configure the frontend:**
   ```bash
   cd bookshop/bookshop
   npm install
   # Update API URLs in the React components
   npm start
   ```

## Docker Deployment

### Development Environment

1. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Frontend: http://localhost:3000
   - API: http://localhost:7247
   - Database: localhost:1433

### Production Environment

1. **Create production environment file:**
   ```bash
   # Create .env.prod file
   cat > .env.prod << EOF
   DB_PASSWORD=YourStrongProductionPassword!
   CONNECTION_STRING=Server=database;Database=KTStore;User Id=sa;Password=YourStrongProductionPassword!;TrustServerCertificate=true;
   JWT_SECRET_KEY=YourProductionJWTSecretKey256Bits!
   FRONTEND_URL=https://yourdomain.com
   API_URL=https://api.yourdomain.com/api
   EOF
   ```

2. **Run production deployment:**
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

### Container Registry

1. **Build and tag images:**
   ```bash
   # Build API image
   docker build -t bookshop-api:latest ./BookshopApi/ProductManagementWebApi
   
   # Build Frontend image
   docker build -t bookshop-frontend:latest ./bookshop/bookshop
   ```

2. **Push to registry:**
   ```bash
   # Tag for Docker Hub
   docker tag bookshop-api:latest yourusername/bookshop-api:latest
   docker tag bookshop-frontend:latest yourusername/bookshop-frontend:latest
   
   # Push to Docker Hub
   docker push yourusername/bookshop-api:latest
   docker push yourusername/bookshop-frontend:latest
   ```

## Azure Deployment

### Azure App Service

#### Backend Deployment (API)

1. **Create App Service:**
   ```bash
   # Using Azure CLI
   az group create --name bookshop-rg --location "East US"
   az appservice plan create --name bookshop-plan --resource-group bookshop-rg --sku B1
   az webapp create --name bookshop-api --resource-group bookshop-rg --plan bookshop-plan --runtime "DOTNET|6.0"
   ```

2. **Configure App Service:**
   ```bash
   # Set application settings
   az webapp config appsettings set --name bookshop-api --resource-group bookshop-rg --settings \
     ASPNETCORE_ENVIRONMENT=Production \
     ConnectionStrings__DefaultConnection="Your Azure SQL connection string" \
     Jwt__SecretKey="Your production JWT key" \
     Cors__AllowedOrigins__0="https://bookshop-frontend.azurewebsites.net"
   ```

3. **Deploy the API:**
   ```bash
   cd BookshopApi/ProductManagementWebApi
   dotnet publish -c Release
   # Zip the publish folder and deploy via Azure Portal or CLI
   ```

#### Frontend Deployment

1. **Create Static Web App:**
   ```bash
   # Using Azure CLI
   az staticwebapp create \
     --name bookshop-frontend \
     --resource-group bookshop-rg \
     --source https://github.com/yourusername/React_TrainAndWork_Assignment3 \
     --location "East US2" \
     --branch main \
     --app-location "bookshop/bookshop" \
     --output-location "build"
   ```

2. **Configure environment variables:**
   ```bash
   # Set in Azure Portal under Configuration
   REACT_APP_API_BASE_URL=https://bookshop-api.azurewebsites.net/api
   ```

### Azure SQL Database

1. **Create SQL Database:**
   ```bash
   # Create SQL Server
   az sql server create \
     --name bookshop-sql-server \
     --resource-group bookshop-rg \
     --location "East US" \
     --admin-user sqladmin \
     --admin-password "YourStrongPassword123!"
   
   # Create database
   az sql db create \
     --name KTStore \
     --server bookshop-sql-server \
     --resource-group bookshop-rg \
     --service-objective Basic
   ```

2. **Configure firewall:**
   ```bash
   # Allow Azure services
   az sql server firewall-rule create \
     --name AllowAzureServices \
     --server bookshop-sql-server \
     --resource-group bookshop-rg \
     --start-ip-address 0.0.0.0 \
     --end-ip-address 0.0.0.0
   ```

3. **Import database schema:**
   ```bash
   # Use SQL Server Management Studio or Azure Data Studio
   # Connect to the Azure SQL database and execute KTDB.sql
   ```

### Azure Container Instances

1. **Deploy using container images:**
   ```bash
   # Deploy API container
   az container create \
     --resource-group bookshop-rg \
     --name bookshop-api-container \
     --image yourusername/bookshop-api:latest \
     --ports 80 \
     --dns-name-label bookshop-api \
     --environment-variables \
       ASPNETCORE_ENVIRONMENT=Production \
       ConnectionStrings__DefaultConnection="Your connection string"
   
   # Deploy Frontend container
   az container create \
     --resource-group bookshop-rg \
     --name bookshop-frontend-container \
     --image yourusername/bookshop-frontend:latest \
     --ports 80 \
     --dns-name-label bookshop-frontend \
     --environment-variables \
       REACT_APP_API_BASE_URL=https://bookshop-api.eastus.azurecontainer.io/api
   ```

## Manual Server Deployment

### Ubuntu/Linux Server

1. **Install prerequisites:**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install .NET 6.0
   wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
   sudo dpkg -i packages-microsoft-prod.deb
   sudo apt update
   sudo apt install -y dotnet-sdk-6.0
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install Nginx
   sudo apt install -y nginx
   
   # Install SQL Server (optional)
   sudo apt install -y mssql-server mssql-tools
   ```

2. **Deploy backend:**
   ```bash
   # Create application directory
   sudo mkdir -p /var/www/bookshop-api
   cd /var/www/bookshop-api
   
       # Clone and build
    git clone https://github.com/yasinslmz/React_TrainAndWork_Assignment3.git .
    cd BookshopApi/ProductManagementWebApi
    dotnet publish -c Release -o /var/www/bookshop-api/publish
   
   # Create systemd service
   sudo tee /etc/systemd/system/bookshop-api.service > /dev/null <<EOF
   [Unit]
   Description=Bookshop API
   After=network.target
   
   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/var/www/bookshop-api/publish
   ExecStart=/usr/bin/dotnet ProductManagementWebApi.dll
   Restart=always
   RestartSec=10
   Environment=ASPNETCORE_ENVIRONMENT=Production
   Environment=ASPNETCORE_URLS=http://localhost:5000
   
   [Install]
   WantedBy=multi-user.target
   EOF
   
   # Start service
   sudo systemctl enable bookshop-api
   sudo systemctl start bookshop-api
   ```

3. **Deploy frontend:**
   ```bash
   # Build React app
   cd /path/to/bookshop/bookshop
   npm install
   npm run build
   
   # Copy to web directory
   sudo cp -r build/* /var/www/html/
   
   # Configure Nginx
   sudo tee /etc/nginx/sites-available/bookshop > /dev/null <<EOF
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files \$uri \$uri/ /index.html;
       }
       
       location /api/ {
           proxy_pass http://localhost:5000/api/;
           proxy_set_header Host \$host;
           proxy_set_header X-Real-IP \$remote_addr;
           proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto \$scheme;
       }
   }
   EOF
   
   # Enable site
   sudo ln -s /etc/nginx/sites-available/bookshop /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Azure

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: 6.0.x
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
         - name: Test Backend
       run: |
         cd BookshopApi/ProductManagementWebApi
         dotnet test
    
    - name: Test Frontend
      run: |
        cd bookshop/bookshop
        npm ci
        npm test -- --coverage --watchAll=false

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Login to Azure
      uses: azure/login@v1
      with:
        creds: ${{ secrets.AZURE_CREDENTIALS }}
    
         - name: Deploy API to Azure App Service
       uses: azure/webapps-deploy@v2
       with:
         app-name: 'bookshop-api'
         package: './BookshopApi/ProductManagementWebApi'
    
    - name: Deploy Frontend to Azure Static Web Apps
      uses: Azure/static-web-apps-deploy@v1
      with:
        azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
        repo_token: ${{ secrets.GITHUB_TOKEN }}
        action: "upload"
        app_location: "bookshop/bookshop"
        output_location: "build"
```

## Environment Configuration

### Production Checklist

- [ ] Update all hardcoded localhost URLs
- [ ] Set strong JWT secret key
- [ ] Configure HTTPS/SSL certificates
- [ ] Set up proper CORS origins
- [ ] Configure production database
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy
- [ ] Set up CDN for static assets
- [ ] Configure caching
- [ ] Set up health checks

### Security Configuration

```json
{
  "Jwt": {
    "SecretKey": "Your-256-bit-secret-key-here",
    "Issuer": "https://your-production-domain.com",
    "Audience": "BookshopClient",
    "ExpirationHours": 1
  },
  "Cors": {
    "AllowedOrigins": ["https://your-production-domain.com"]
  },
  "Logging": {
    "LogLevel": {
      "Default": "Warning",
      "Microsoft.AspNetCore": "Warning"
    }
  }
}
```

## Monitoring & Logging

### Application Insights (Azure)

1. **Add Application Insights:**
   ```bash
   # Install NuGet package
   dotnet add package Microsoft.ApplicationInsights.AspNetCore
   ```

2. **Configure in Program.cs:**
   ```csharp
   builder.Services.AddApplicationInsightsTelemetry();
   ```

### Health Checks

Add to your API:

```csharp
// Program.cs
builder.Services.AddHealthChecks()
    .AddSqlServer(connectionString)
    .AddDbContextCheck<ApplicationDbContext>();

app.MapHealthChecks("/health");
```

### Logging

```csharp
// Configure logging
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();
builder.Logging.AddApplicationInsights();
```

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   ```bash
   # Check connection string
   # Verify SQL Server is running
   # Check firewall settings
   telnet your-sql-server 1433
   ```

2. **CORS Errors**
   ```bash
   # Verify frontend URL in CORS configuration
   # Check both http and https protocols
   ```

3. **API Not Responding**
   ```bash
   # Check if API is running
   curl -f http://localhost:7247/health
   
   # Check logs
   docker logs bookshop-api
   ```

4. **Frontend Build Fails**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

### Debug Commands

```bash
# Check container status
docker ps
docker logs container-name

# Check service status (Linux)
sudo systemctl status bookshop-api
sudo journalctl -u bookshop-api -f

# Check Azure deployment
az webapp log tail --name bookshop-api --resource-group bookshop-rg

# Test API endpoints
curl -X GET http://localhost:7247/api/products
curl -X POST http://localhost:7247/api/login/register -H "Content-Type: application/json" -d '{"email":"test@test.com","password":"test123"}'
```

### Performance Optimization

1. **Database Optimization:**
   - Add proper indexes
   - Use connection pooling
   - Implement caching

2. **API Optimization:**
   - Enable response compression
   - Use async/await properly
   - Implement pagination

3. **Frontend Optimization:**
   - Code splitting
   - Lazy loading
   - CDN for static assets
   - Bundle optimization

---

## Support

For deployment issues:

1. Check the [troubleshooting section](#troubleshooting)
2. Review the logs
3. Create an issue on GitHub with detailed information
4. Include environment details and error messages

---

*Last updated: January 2024* 
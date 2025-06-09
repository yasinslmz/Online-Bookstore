# Multi-stage build for ASP.NET Core application

# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# Copy project file and restore dependencies
COPY ["ProductManagementWebApi/ProductManagementWebApi.csproj", "ProductManagementWebApi/"]
RUN dotnet restore "ProductManagementWebApi/ProductManagementWebApi.csproj"

# Copy all source code
COPY . .

# Build the application
WORKDIR "/src/ProductManagementWebApi"
RUN dotnet build "ProductManagementWebApi.csproj" -c Release -o /app/build

# Stage 2: Publish the application
FROM build AS publish
RUN dotnet publish "ProductManagementWebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Stage 3: Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS final
WORKDIR /app

# Create non-root user for security
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Copy published application
COPY --from=publish /app/publish .

# Change ownership to appuser
RUN chown -R appuser:appuser /app
USER appuser

# Expose ports
EXPOSE 80
EXPOSE 443

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:80/health || exit 1

# Set entry point
ENTRYPOINT ["dotnet", "ProductManagementWebApi.dll"] 
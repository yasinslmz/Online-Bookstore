using Microsoft.EntityFrameworkCore;
using ProductManagementWebApi.Models;

namespace ProductManagementWebApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Blog> Blog { get; set; }
        public DbSet<Billing> Billing { get; set; }

        public DbSet<SoldProduct> SoldProduct { get; set; }

    }
}

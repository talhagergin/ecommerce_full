using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options)  : DbContext(options)
{
    public DbSet<Product> Products  => Set<Product>();


    override protected void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Product>().HasData(
            new List<Product>{
                new Product { Id = 1, Name = "Product 1", Description = "Description 1", Price = 100, IsActive = true, ImageUrl = "https://via.placeholder.com/150", Stock = 10 },
                new Product { Id = 2, Name = "Product 2", Description = "Description 2", Price = 200, IsActive = true, ImageUrl = "https://via.placeholder.com/150", Stock = 20 },
                new Product { Id = 3, Name = "Product 3", Description = "Description 3", Price = 300, IsActive = true, ImageUrl = "https://via.placeholder.com/150", Stock = 30 },
                new Product { Id = 4, Name = "Product 4", Description = "Description 4", Price = 400, IsActive = true, ImageUrl = "https://via.placeholder.com/150", Stock = 40 },
                new Product { Id = 5, Name = "Product 5", Description = "Description 5", Price = 500, IsActive = true, ImageUrl = "https://via.placeholder.com/150", Stock = 50 }
            }
           
        );
    }
}
using InstrumentStore.Core.Models;
using InstrumentStore.Core.Models.Piano;
using Microsoft.EntityFrameworkCore;

namespace InstrumentStore.Data
{
    public class StoreDbContext : DbContext
    {
        public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<ShoppingCartItem> CartItems { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Description> Descriptions { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Quantity> Quantities { get; set; }
        public DbSet<Specification> Specifications { get; set; }
        public DbSet<DigitalPiano> DigitalPianos { get; set; }
        public DbSet<GrandPiano> GrandPianos { get; set; }
        public DbSet<UprightPiano> UprightPianos { get; set; }
    }
}
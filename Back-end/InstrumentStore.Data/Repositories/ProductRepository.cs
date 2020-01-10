using InstrumentStore.Core.Models;
using InstrumentStore.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.Data.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(StoreDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Product>> GetAllWithBrandAsync()
        {
            return await StoreDbContext.Products
                .Include(x => x.Brand)
                .Include(x => x.Quantity)
                .Include(x => x.Branch).ThenInclude(x => x.Category)
                .Include(x => x.Description)
                .Include(x => x.Specification).ThenInclude(x => x.GrandPiano)
                .Include(x => x.Specification).ThenInclude(x => x.UprightPiano)
                .Include(x => x.Specification).ThenInclude(x => x.DigitalPiano)
                .ToListAsync();
        }

        public async Task<Product> GetWithBrandByIdAsync(int id)
        {
            return await StoreDbContext.Products
                .Include(x => x.Brand)
                .Include(x => x.Quantity)
                .Include(x => x.Branch).ThenInclude(x => x.Category)
                .Include(x => x.Description)
                .Include(x => x.Specification).ThenInclude(x => x.GrandPiano)
                .Include(x => x.Specification).ThenInclude(x => x.UprightPiano)
                .Include(x => x.Specification).ThenInclude(x => x.DigitalPiano)
                .SingleOrDefaultAsync(m => m.ProductId == id);
        }

        public async Task<IEnumerable<Product>> GetAllWithBrandByBrandIdAsync(int brandId)
        {
            return await StoreDbContext.Products
                .Include(m => m.Brand)
                .Where(m => m.BrandId == brandId)
                .ToListAsync();
        }

        private StoreDbContext StoreDbContext
        {
            get { return Context as StoreDbContext; }
        }
    }
}
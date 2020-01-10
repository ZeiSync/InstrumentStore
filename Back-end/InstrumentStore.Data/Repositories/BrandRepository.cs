using InstrumentStore.Core.Models;
using InstrumentStore.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InstrumentStore.Data.Repositories
{
    public class BrandRepository : Repository<Brand>, IBrandRepository
    {
        public BrandRepository(StoreDbContext context)
            : base(context)
        { }

        public async Task<IEnumerable<Brand>> GetAllWithProductsAsync()
        {
            return await StoreDbContext.Brands
                .Include(a => a.Products)
                .ToListAsync();
        }

        public Task<Brand> GetWithProductsByIdAsync(int id)
        {
            return StoreDbContext.Brands
                .Include(a => a.Products)
                .SingleOrDefaultAsync(a => a.BrandId == id);
        }

        private StoreDbContext StoreDbContext
        {
            get { return Context as StoreDbContext; }
        }
    }
}
using InstrumentStore.Core.Models;
using InstrumentStore.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace InstrumentStore.Data.Repositories
{
    public class BranchRepository : Repository<Branch>, IBranchRepository
    {

        public BranchRepository(StoreDbContext context) : base(context) {}

        public async Task<IEnumerable<Branch>> GetAllWithCategoryAsync()
        {
            return await StoreDbContext.Branches.Include(c => c.Category).ToListAsync();
        }

        public async Task<IEnumerable<Branch>> GetAllWithCategoryByCategoryIdAsync(int categoryId)
        {
            return await StoreDbContext.Branches
                .Include(c => c.Category)
                .Where(c => c.CategoryId == categoryId)
                .ToListAsync();
        }

        public async Task<Branch> GetWithCategoryByIdAsync(int id)
        {
            return await StoreDbContext.Branches.Include(c => c.Category).SingleOrDefaultAsync(b => b.BranchId == id);
        }

        private StoreDbContext StoreDbContext
        {
            get { return Context as StoreDbContext; }
        }
    }
}

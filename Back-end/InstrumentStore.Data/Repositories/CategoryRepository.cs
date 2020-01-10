using InstrumentStore.Core.Models;
using InstrumentStore.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Data.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(StoreDbContext context) : base(context)
        {

        }

        public async Task<IEnumerable<Category>> GetAllWithBranchAsync()
        {
            return await StoreDbContext.Categories.Include(b => b.Branches).ToListAsync();
        }

        public async Task<Category> GetWithBranchByIdAsync(int id)
        {
            return await StoreDbContext.Categories.Include(b => b.Branches).SingleOrDefaultAsync(c => c.CategoryId == id);
        }

        public StoreDbContext StoreDbContext
        {
            get { return Context as StoreDbContext; }
        }
    }
}

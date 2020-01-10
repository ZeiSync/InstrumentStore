using InstrumentStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Core.Repositories
{
    public interface IBranchRepository : IRepository<Branch>
    {

        Task<IEnumerable<Branch>> GetAllWithCategoryAsync();

        Task<Branch> GetWithCategoryByIdAsync(int id);

        Task<IEnumerable<Branch>> GetAllWithCategoryByCategoryIdAsync(int categoryId);

    }
}

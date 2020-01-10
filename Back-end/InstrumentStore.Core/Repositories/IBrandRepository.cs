using InstrumentStore.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InstrumentStore.Core.Repositories
{
    public interface IBrandRepository : IRepository<Brand>
    {
        Task<IEnumerable<Brand>> GetAllWithProductsAsync();

        Task<Brand> GetWithProductsByIdAsync(int id);
    }
}
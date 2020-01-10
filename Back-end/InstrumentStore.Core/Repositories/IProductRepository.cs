using InstrumentStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Core.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
        Task<IEnumerable<Product>> GetAllWithBrandAsync();
        Task<Product> GetWithBrandByIdAsync(int id);
        Task<IEnumerable<Product>> GetAllWithBrandByBrandIdAsync(int brandId);
    }
}

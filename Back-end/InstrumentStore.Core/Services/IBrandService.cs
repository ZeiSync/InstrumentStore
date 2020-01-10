using InstrumentStore.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InstrumentStore.Core.Services
{
    public interface IBrandService
    {
        Task<IEnumerable<Brand>> GetAllBrands();

        Task<Brand> GetBrandById(int id);

        Task<Brand> CreateBrand(Brand newBrand);

        Task UpdateBrand(Brand brandToBeUpdated, Brand brand);

        Task DeleteBrand(Brand brand);
    }
}
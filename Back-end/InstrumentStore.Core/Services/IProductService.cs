using InstrumentStore.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InstrumentStore.Core.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllWithBrand();

        Task<Product> GetProductById(int id);

        Task<IEnumerable<Product>> GetProductsByBrandId(int brandId);

        Task<Product> CreateProduct(Product newProduct);

        Task UpdateProduct(Product productToBeUpdated, Product product);

        Task DeleteProduct(Product product);
    }
}
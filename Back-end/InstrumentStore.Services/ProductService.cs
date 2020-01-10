using InstrumentStore.Core;
using InstrumentStore.Core.Models;
using InstrumentStore.Core.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Services
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<Product> CreateProduct(Product newProduct)
        {
            await _unitOfWork.Products.AddAsync(newProduct);
            await _unitOfWork.CommitAsync();
            return newProduct;
        }

        public async Task DeleteProduct(Product product)
        {
            _unitOfWork.Products.Remove(product);
            await _unitOfWork.CommitAsync();
        }

        public async Task<IEnumerable<Product>> GetAllWithBrand()
        {
            return await _unitOfWork.Products
                .GetAllWithBrandAsync();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _unitOfWork.Products
                .GetWithBrandByIdAsync(id);
        }

        public async Task<IEnumerable<Product>> GetProductsByBrandId(int artistId)
        {
            return await _unitOfWork.Products
                .GetAllWithBrandByBrandIdAsync(artistId);
        }

        public async Task UpdateProduct(Product productToBeUpdated, Product product)
        {
            productToBeUpdated.ProductName = product.ProductName;
            productToBeUpdated.BrandId = product.BrandId;

            await _unitOfWork.CommitAsync();
        }
    }
}

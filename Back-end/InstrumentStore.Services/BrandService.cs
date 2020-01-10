using InstrumentStore.Core;
using InstrumentStore.Core.Models;
using InstrumentStore.Core.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Services
{
    public class BrandService : IBrandService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BrandService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<Brand> CreateBrand(Brand newBrand)
        {
            await _unitOfWork.Brands.AddAsync(newBrand);
            await _unitOfWork.CommitAsync();
            return newBrand;
        }

        public async Task DeleteBrand(Brand brand)
        {
            _unitOfWork.Brands.Remove(brand);

            await _unitOfWork.CommitAsync();
        }

        public async Task<IEnumerable<Brand>> GetAllBrands()
        {
            return await _unitOfWork.Brands.GetAllAsync();
        }

        public async Task<Brand> GetBrandById(int id)
        {
            return await _unitOfWork.Brands.GetByIdAsync(id);
        }

        public async Task UpdateBrand(Brand brandToBeUpdated, Brand brand)
        {
            brandToBeUpdated.BrandName = brand.BrandName;

            await _unitOfWork.CommitAsync();
        }
    }
}

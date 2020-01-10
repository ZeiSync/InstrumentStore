using InstrumentStore.Core;
using InstrumentStore.Core.Repositories;
using InstrumentStore.Data.Repositories;
using System.Threading.Tasks;

namespace InstrumentStore.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StoreDbContext _context;
        private ProductRepository _productRepository;
        private BrandRepository _brandRepository;
        private CategoryRepository _categoryRepository;
        private BranchRepository _branchesRepository;

        public UnitOfWork(StoreDbContext context)
        {
            this._context = context;
        }

        public IProductRepository Products => _productRepository = _productRepository ?? new ProductRepository(_context);

        public IBrandRepository Brands => _brandRepository = _brandRepository ?? new BrandRepository(_context);

        public ICategoryRepository Categories => _categoryRepository = _categoryRepository ?? new CategoryRepository(_context);

        public IBranchRepository Branches => _branchesRepository = _branchesRepository ?? new BranchRepository(_context);

        public async Task<int> CommitAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
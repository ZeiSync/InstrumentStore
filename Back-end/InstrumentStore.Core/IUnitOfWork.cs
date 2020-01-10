using InstrumentStore.Core.Repositories;
using System;
using System.Threading.Tasks;

namespace InstrumentStore.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IProductRepository Products { get; }
        IBrandRepository Brands { get; }
        ICategoryRepository Categories { get; }
        IBranchRepository Branches { get; }

        Task<int> CommitAsync();
    }
}
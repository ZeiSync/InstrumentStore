using InstrumentStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Core.Services
{
    public interface IBranchService
    {
        Task<IEnumerable<Branch>> GetAllBranchs();

        Task<Branch> GetBranchById(int id);

        Task<Branch> CreateBranch(Branch newBranch);

        Task UpdateBranch(Branch branchToBeUpdated, Branch branch);

        Task DeleteBranch(Branch branch);

    }
}

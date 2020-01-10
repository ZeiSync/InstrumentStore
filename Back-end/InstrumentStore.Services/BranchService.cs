using InstrumentStore.Core;
using InstrumentStore.Core.Models;
using InstrumentStore.Core.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Services
{
    public class BranchService : IBranchService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BranchService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }
        public async Task<Branch> CreateBranch(Branch newBranch)
        {
            await _unitOfWork.Branches.AddAsync(newBranch);
            await _unitOfWork.CommitAsync();
            return newBranch;

        }

        public async Task DeleteBranch(Branch branch)
        {
            _unitOfWork.Branches.Remove(branch);

            await _unitOfWork.CommitAsync();
        }

        public async Task<IEnumerable<Branch>> GetAllBranchs()
        {
            return await _unitOfWork.Branches.GetAllAsync();
        }

        public async Task<Branch> GetBranchById(int id)
        {
            return await _unitOfWork.Branches.GetByIdAsync(id);
        }

        public async Task UpdateBranch(Branch branchToBeUpdated, Branch branch)
        {
            branchToBeUpdated.BranchName = branch.BranchName;

            await _unitOfWork.CommitAsync();
        }
    }
}

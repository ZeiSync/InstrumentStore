using InstrumentStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace InstrumentStore.Core.Services
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAllCategories();

        Task<Category> GetCategoryById(int id);

        Task<Category> CreateCategory(Category newCategory);

        Task UpdateCategory(Category categoryToBeUpdated, Category category);

        Task DeleteCategory(Category category);

    }
}

using System.Collections.Generic;

namespace InstrumentStore.Core.Models
{
    public class Category
    {
        public Category()
        {
            Branches = new HashSet<Branch>();
        }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public ICollection<Branch> Branches { get; set; }
    }
}
using System.Collections.Generic;

namespace InstrumentStore.Core.Models
{
    public class Branch
    {
        public Branch()
        {
            Products = new HashSet<Product>();
        }

        public int BranchId { get; set; }
        public string BranchName { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
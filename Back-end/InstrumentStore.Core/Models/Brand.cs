using System.Collections.Generic;

namespace InstrumentStore.Core.Models
{
    public class Brand
    {
        public Brand()
        {
            Products = new HashSet<Product>();
        }

        public int BrandId { get; set; }
        public string BrandName { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
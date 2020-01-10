using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.API.Resources.ViewResources
{
    public class ProductResource
    {
        public string ProductName { get; set; }
        public bool Popularity { get; set; } = false;
        public double Price { get; set; }

        public int Quantities { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public string Branch { get; set; }

        public DescriptionResource Description { get; set; }
        public SpectificationResource Specification { get; set; }

        //public ShoppingCartItem ShoppingCartItem { get; set; }
    }
}

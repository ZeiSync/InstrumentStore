using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.API.Resources.SaveResources
{
    public class SaveProductResource
    {
        public string ProductName { get; set; }
        public bool Popularity { get; set; }
        public double Price { get; set; }
        public int BranchId { get; set; }
        public int BrandId { get; set; }
    }
}

namespace InstrumentStore.Core.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }
        public bool Popularity { get; set; } = false;
        public double Price { get; set; }

        public Quantity Quantity { get; set; }

        public Description Description { get; set; }

        public int BrandId { get; set; }
        public Brand Brand { get; set; }

        public int BranchId { get; set; }
        public Branch Branch { get; set; }

        public Specification Specification { get; set; }

        public ShoppingCartItem ShoppingCartItem { get; set; }
    }
}
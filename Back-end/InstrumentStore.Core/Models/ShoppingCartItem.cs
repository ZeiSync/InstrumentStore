namespace InstrumentStore.Core.Models
{
    public class ShoppingCartItem
    {
        public int ShoppingCartItemId { get; set; }

        public double Amount { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int OrderDetailId { get; set; }
        public OrderDetail OrderDetail { get; set; }
    }
}
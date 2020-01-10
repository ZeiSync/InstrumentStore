using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InstrumentStore.Core.Models
{
    public class OrderDetail
    {
        public OrderDetail()
        {
            CartItems = new HashSet<ShoppingCartItem>();
        }

        public int OrderDetailId { get; set; }

        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

        [Required]
        public int QuantityOrdered { get; set; }

        [Required]
        public double PriceEach { get; set; }

        [Required]
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;

        [Required]
        public DateTime RequiredDate { get; set; } = DateTime.UtcNow;

        public DateTime ShippedDate { get; set; } = DateTime.UtcNow.AddDays(2);

        public string Comment { get; set; }

        public ICollection<ShoppingCartItem> CartItems { get; set; }
    }
}
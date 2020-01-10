using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InstrumentStore.Core.Models
{
    public class Customer
    {
        public Customer()
        {
            OrderDetails = new HashSet<OrderDetail>();
            Payments = new HashSet<Payment>();
        }

        public int CustomerId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string ContactName { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string AddressLine1 { get; set; }

        public string AddressLine2 { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        public string PostalCode { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public int OrderTotal { get; set; }

        public string OrderPlace { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }

        public ICollection<Payment> Payments { get; set; }
    }
}
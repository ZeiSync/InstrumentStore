using System;
using System.ComponentModel.DataAnnotations;

namespace InstrumentStore.Core.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }

        public string CustomerId { get; set; }
        public Customer Customer { get; set; }

        [Required]
        public DateTime PaymentDay { get; set; } = DateTime.UtcNow.Date;

        [Required]
        public double Amount { get; set; }
    }
}
using InstrumentStore.Core.Models.Piano;

namespace InstrumentStore.Core.Models
{
    public class Specification
    {
        public int SpecificationId { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int Height { get; set; }
        public int Width { get; set; }
        public int Length { get; set; }
        public double Weight { get; set; }
        public string Color { get; set; }

        public GrandPiano GrandPiano { get; set; }

        public UprightPiano UprightPiano { get; set; }

        public DigitalPiano DigitalPiano { get; set; }
    }
}
using InstrumentStore.API.Resources.ViewResources.Piano;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.API.Resources.ViewResources
{
    public class SpectificationResource
    {
        public int Height { get; set; }
        public int Width { get; set; }
        public int Length { get; set; }
        public double Weight { get; set; }
        public string Color { get; set; }

        public GrandPianoResource GrandPiano { get; set; }

        public UprightPianoResource UprightPiano { get; set; }

        public DigitalPianoResource DigitalPiano { get; set; }
    }
}

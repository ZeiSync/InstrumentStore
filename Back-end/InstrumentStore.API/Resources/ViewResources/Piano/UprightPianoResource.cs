using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.API.Resources.ViewResources.Piano
{
    public class UprightPianoResource
    {
        public string WhiteKeySurfaces { get; set; }
        public string BlackKeySurfaces { get; set; }
        public string Action { get; set; }
        public string HammerFelts { get; set; }

        public string Soundboard { get; set; }
        public string SpeakingLengthOfNo1String { get; set; }
        public string ContourBars { get; set; }
        public string Agraffes { get; set; }
        public string DuplexScaling { get; set; }
        public string BackPosts { get; set; }

        public string Pedal { get; set; }
        public string FrontCasters { get; set; }
        public bool SoftFall { get; set; }

        public bool Lock { get; set; }
    }
}

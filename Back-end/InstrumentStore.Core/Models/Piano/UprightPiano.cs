namespace InstrumentStore.Core.Models.Piano
{
    public class UprightPiano
    {
        public int UprightPianoId { get; set; }

        public int SpecificationId { get; set; }
        public Specification Specification { get; set; }

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
        public string FrontCasters { get; set; } //bánh xe
        public bool SoftFall { get; set; } //cú ngã nhẹ nhàng

        public bool Lock { get; set; }
    }
}
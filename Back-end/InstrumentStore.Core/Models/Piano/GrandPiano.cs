namespace InstrumentStore.Core.Models.Piano
{
    public class GrandPiano
    {
        public int GrandPianoId { get; set; }

        public int SpecificationId { get; set; }
        public Specification Specification { get; set; }

        public string SoundBoard { get; set; }
        public string Plate { get; set; }
        public string Action { get; set; }
        public string PinBlock { get; set; }
        public string Bridges { get; set; }
        public string Hammers { get; set; }
        public string Strings { get; set; }
        public string TuningPins { get; set; }
        public string Agraffes { get; set; }
        public string Keys { get; set; }
        public string Beams { get; set; }
        public string Ribs { get; set; }
        public string MiddlePedal { get; set; }
        public string Warranty { get; set; }
        public string Fallboard { get; set; }
    }
}
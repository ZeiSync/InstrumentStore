namespace InstrumentStore.Core.Models.Piano
{
    public class DigitalPiano
    {
        public int DigitalPianoId { get; set; }

        public int SpecificationId { get; set; }
        public Specification Specification { get; set; }

        public string Keyboard { get; set; }
        public string TouchResponse { get; set; }
        public string SoundSource { get; set; }
        public int MaximumPolyphony { get; set; }
        public string Tones { get; set; }
        public string DigitalEffects { get; set; }
        public string Rhythms { get; set; } //giai điệu/ mẫu
        public string AutoAccompaniment { get; set; } //nhạc đệm tự động
        public string BuiltInSongs { get; set; }
        public string SongExpansion { get; set; }
        public string LessonFunction { get; set; }
        public string Metronome { get; set; }
        public string Recorder { get; set; }
        public string SamplingFunction { get; set; }
        public string OtherFunctions { get; set; }
        public string MIDI { get; set; }
        public string Inputs { get; set; }
        public string Outputs { get; set; }
        public string Speakers { get; set; }
        public string PowerSupply { get; set; }
        public string PowerConsumption { get; set; }
        public string Dimensions { get; set; }
        public string IncludedAccessories { get; set; }
    }
}
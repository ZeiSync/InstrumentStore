namespace InstrumentStore.Core.Models
{
    public class Description
    {
        public int DescriptionId { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public string ImgUrl { get; set; }
        public string HtmlDescription { get; set; }
        public string TextDescription { get; set; }
    }
}
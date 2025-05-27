namespace InfotavleBackend.Entities
{
    public class Slides
    {
        [System.ComponentModel.DataAnnotations.Key]
        public global::System.Int32 slidesID { get; set; }

        public required string componentName { get; set; }
        public DateTime? expirationDate { get; set; }
        public required bool isActive { get; set; }
    }
}

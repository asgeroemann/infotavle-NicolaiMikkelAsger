using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InfotavleBackend.Entities
{
    public class Slides
    {
        [Key]
        public int slidesID { get; set; }

        [Required, MaxLength(100)]
        public string componentName { get; set; }

        public DateTime? expirationDate { get; set; }

        [Required, Column("isActive", TypeName="bit")]
        public bool isActive { get; set; }
    }
}

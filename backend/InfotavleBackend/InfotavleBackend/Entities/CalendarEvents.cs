using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InfotavleBackend.Entities
{
    public class CalendarEvents
    {
        [Key]
        public int eventID { get; set; }

        [Required]
        public DateTime theDate { get; set; }

        [Required, MaxLength(100)]
        public string theMessage { get; set; }

        //[ForeignKey("Slides")]
        public int? slideID { get; set; }
        
        //public virtual Slides Slides { get; set; }
    }
}

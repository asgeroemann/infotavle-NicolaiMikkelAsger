using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InfotavleBackend.Entities
{
    public class TheComments
    {
        [Key]
        public int commentsID { get; set; }

        public string commentContent { get; set; }

        public DateTime commentDate { get; set; }
    }
}

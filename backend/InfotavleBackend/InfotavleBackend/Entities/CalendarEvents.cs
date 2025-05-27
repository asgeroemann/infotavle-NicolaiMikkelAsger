namespace InfotavleBackend.Entities
{
    public class CalendarEvents
    {
        [System.ComponentModel.DataAnnotations.Key]
        public global::System.Int32 eventID { get; set; }

        public required DateTime theDate { get; set; }
        public required string theMessage { get; set; }
        public int? slideID { get; set; }
    }
}

using InfotavleBackend.Entities;

namespace InfotavleBackend.Repositories.Interface
{
    public interface IGetTheCalendarEvents
    {
        Task<List<CalendarEvents>> RetrieveTheEventsAsync();
    }
}

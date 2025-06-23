using InfotavleBackend.Entities;
using InfotavleBackend.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace InfotavleBackend.Repositories.Implementation
{
    public class GetTheCalendarEvents : IGetTheCalendarEvents
    {
        private readonly AppDBContext theDBContext;

        public GetTheCalendarEvents(AppDBContext theDBContext)
        {
            this.theDBContext = theDBContext;
        }

        public async Task<List<CalendarEvents>> RetrieveTheEventsAsync()
        {
            return await theDBContext.calendarEvents.ToListAsync();
        }
    }
}

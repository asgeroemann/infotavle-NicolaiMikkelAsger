using InfotavleBackend.Entities;
using InfotavleBackend.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InfotavleBackend.Controllers
{
    [Route("api/events")]
    [ApiController]
    [ResponseCache(Duration = 30)]
    public class EventsController: ControllerBase
    {
        private readonly AppDBContext theDBContext;
        private readonly IGetTheCalendarEvents theCalendarEventsGetter;

        public EventsController(AppDBContext theDBContext, IGetTheCalendarEvents theCalendarEventsGetter)
        {
            this.theDBContext = theDBContext;
            this.theCalendarEventsGetter = theCalendarEventsGetter;
        }

        // Get all records from this table in the DB.
        [HttpGet]
        public async Task<List<CalendarEvents>> Get()
        {
            // Get the events from repository async
            var theEventsRaw = await theCalendarEventsGetter.RetrieveTheEventsAsync();
            // Get the slides from repository async
            // Create list of TheEventsDTO
            return await theDBContext.calendarEvents.ToListAsync();
        }
    }
}

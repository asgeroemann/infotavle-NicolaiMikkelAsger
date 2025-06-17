using InfotavleBackend.Entities;
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

        public EventsController(AppDBContext theDBContext)
        {
            this.theDBContext = theDBContext;
        }

        // Get all records from this table in the DB.
        [HttpGet]
        public async Task<List<CalendarEvents>> Get()
        {
            return await theDBContext.calendarEvents.ToListAsync();
        }
    }
}

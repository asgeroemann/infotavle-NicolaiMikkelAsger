using InfotavleBackend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InfotavleBackend.Controllers
{
    [Route("api/slides")]
    [ApiController]
    public class SlidesController: ControllerBase
    {
        private readonly AppDBContext theDBContext;

        public SlidesController(AppDBContext theDBContext)
        {
            this.theDBContext = theDBContext;
        }

        // Get all records from this table in the DB.
        [HttpGet]
        public async Task<List<Slides>> Get()
        {
            return await theDBContext.slides.ToListAsync();
        }
        
        // Get only the active records from this table in the DB, using the "isActive" column.
        [HttpGet("active")]
        public async Task<List<Slides>> GetActive()
        {
            return await theDBContext.slides.Where(x => x.isActive == true).ToListAsync();
        }
    }
}

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

        [HttpGet]
        public async Task<List<Slides>> Get()
        {
            return await theDBContext.slides.ToListAsync();
        }
        
        [HttpGet("/active")]
        public async Task<List<Slides>> GetActive()
        {
            return await theDBContext.slides.Where(x => x.isActive == true).ToListAsync();
        }
    }
}

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
            var theCurrentActiveSlides = await theDBContext.slides.Where(x => x.isActive == true).ToListAsync();
            DateTime currentDate = DateTime.Now.Date;
            bool needDBUpdate = false;
            foreach (var aSlide in theCurrentActiveSlides) {
                if (aSlide.expirationDate.HasValue) {
                    if (currentDate.CompareTo(aSlide.expirationDate.Value.Date) > 0) {
                        aSlide.isActive = false;
                        theDBContext.slides.Update(aSlide);
                    }
                }
            }
            if (needDBUpdate) {
                await theDBContext.SaveChangesAsync();
            }
            return theCurrentActiveSlides.Where(x => x.isActive).ToList();
        }
    }
}

using InfotavleBackend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InfotavleBackend.Controllers
{
    [Route("api/comments")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly AppDBContext theDBContext;

        public CommentsController(AppDBContext theDBContext)
        {
            this.theDBContext = theDBContext;
        }

        // Get all records from this table in the DB.
        [HttpGet]
        public async Task<List<TheComments>> Get()
        {
            return await theDBContext.comments.ToListAsync();
        }

        // Get a specifik record from the table.
        [HttpGet("{id:int}", Name = "GetParticularComment")]
        public async Task<ActionResult<TheComments>> Get(int id)
        {
            var aComment = await theDBContext.comments.SingleOrDefaultAsync(x => x.commentsID == id);
            if (aComment is null) return NotFound(); // No record found.
            return aComment; // Returns the found record.
        }

        // Add a new record to this table in the DB.
        [HttpPost]
        public async Task<CreatedAtRouteResult> Post([FromBody] TheComments aNewComment)
        {
            theDBContext.Add(aNewComment);
            await theDBContext.SaveChangesAsync();
            // Returns the specifik record that was created, uses the above method.
            return CreatedAtRoute("GetParticularComment", new { id = aNewComment.commentsID }, aNewComment);
        }

        // Updates the content of an existing record.
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] TheComments aGivenComment)
        {
            var commentExists = await theDBContext.comments.AnyAsync(x => x.commentsID == id);
            if (!commentExists) return NotFound(); // Record to be updated was't found.
            aGivenComment.commentsID = id;
            theDBContext.Update(aGivenComment);
            await theDBContext.SaveChangesAsync();
            return NoContent(); // Update succedet.
        }

        /*
        // ---***--- Not supposed to be used ---***---
        // Delete portion, deletes the record with "commentsID == id".
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var deleteCount = await theDBContext.comments.Where(x => x.commentsID == id).ExecuteDeleteAsync();
            if (deleteCount == 0) return NotFound(); // No records deleted.
            return NoContent(); // Delete succedet.
        }
        // */
    }
}

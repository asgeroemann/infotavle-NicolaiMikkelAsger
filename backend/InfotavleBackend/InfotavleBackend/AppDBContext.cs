using InfotavleBackend.Entities;
using Microsoft.EntityFrameworkCore;

namespace InfotavleBackend
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions options) : base(options)
        {
        }

        protected AppDBContext()
        {
        }

        public DbSet<Slides> slides { get; set; }
    }
}

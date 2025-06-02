using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InfotavleBackend.Migrations
{
    /// <inheritdoc />
    public partial class MikkelTest3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_calendarEvents_slideID",
                table: "calendarEvents",
                column: "slideID");

            migrationBuilder.AddForeignKey(
                name: "FK_calendarEvents_slides_slideID",
                table: "calendarEvents",
                column: "slideID",
                principalTable: "slides",
                principalColumn: "slidesID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_calendarEvents_slides_slideID",
                table: "calendarEvents");

            migrationBuilder.DropIndex(
                name: "IX_calendarEvents_slideID",
                table: "calendarEvents");
        }
    }
}

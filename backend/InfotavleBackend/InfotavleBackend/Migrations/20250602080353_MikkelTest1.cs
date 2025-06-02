using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InfotavleBackend.Migrations
{
    /// <inheritdoc />
    public partial class MikkelTest1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "calendarEvents",
                columns: table => new
                {
                    eventID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    theDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    theMessage = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    slideID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_calendarEvents", x => x.eventID);
                });

            migrationBuilder.CreateTable(
                name: "slides",
                columns: table => new
                {
                    slidesID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    componentName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    expirationDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    isActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_slides", x => x.slidesID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "calendarEvents");

            migrationBuilder.DropTable(
                name: "slides");
        }
    }
}

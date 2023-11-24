using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoPontos.Migrations
{
    /// <inheritdoc />
    public partial class CorrecaoUsuario : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Data",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Data",
                table: "Clientes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Data",
                table: "Usuarios",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Data",
                table: "Clientes",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}

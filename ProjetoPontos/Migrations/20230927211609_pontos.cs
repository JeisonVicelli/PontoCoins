using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoPontos.Migrations
{
    /// <inheritdoc />
    public partial class pontos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Valor",
                table: "Brinde");

            migrationBuilder.AlterColumn<int>(
                name: "Pontos",
                table: "Cliente",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ValorPontos",
                table: "Brinde",
                type: "INTEGER",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ValorPontos",
                table: "Brinde");

            migrationBuilder.AlterColumn<string>(
                name: "Pontos",
                table: "Cliente",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Valor",
                table: "Brinde",
                type: "TEXT",
                nullable: true);
        }
    }
}

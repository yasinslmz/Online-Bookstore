using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductManagementWebApi.Migrations
{
    /// <inheritdoc />
    public partial class son : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Billing_User_userId",
                table: "Billing");

            migrationBuilder.DropIndex(
                name: "IX_Billing_userId",
                table: "Billing");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Billing_userId",
                table: "Billing",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Billing_User_userId",
                table: "Billing",
                column: "userId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }
    }
}

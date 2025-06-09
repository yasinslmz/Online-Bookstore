using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductManagementWebApi.Migrations
{
    /// <inheritdoc />
    public partial class updd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SoldProduct_Billing_Billingid",
                table: "SoldProduct");

            migrationBuilder.DropForeignKey(
                name: "FK_SoldProduct_Product_ProductId",
                table: "SoldProduct");

            migrationBuilder.DropIndex(
                name: "IX_SoldProduct_Billingid",
                table: "SoldProduct");

            migrationBuilder.DropIndex(
                name: "IX_SoldProduct_ProductId",
                table: "SoldProduct");

            migrationBuilder.RenameColumn(
                name: "Billingid",
                table: "SoldProduct",
                newName: "Quantity");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "SoldProduct",
                newName: "Billingid");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProduct_Billingid",
                table: "SoldProduct",
                column: "Billingid");

            migrationBuilder.CreateIndex(
                name: "IX_SoldProduct_ProductId",
                table: "SoldProduct",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_SoldProduct_Billing_Billingid",
                table: "SoldProduct",
                column: "Billingid",
                principalTable: "Billing",
                principalColumn: "id",
                onDelete: ReferentialAction.NoAction);

            migrationBuilder.AddForeignKey(
                name: "FK_SoldProduct_Product_ProductId",
                table: "SoldProduct",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }
    }
}

namespace ProductManagementWebApi.Models
{
    public class Category
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string slug { get; set; }
        public bool IsStatus { get; set; }
        public List<Product> Products { get; set; } 
    }
}

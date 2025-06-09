

namespace ProductManagementWebApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public bool IsStatus { get; set; }
        public string imagePath { get; set; }
        public string Author { get; set; }
        public int PageCount { get; set; }
        public int count { get; set; }
        public string Slug { get; set; }
        public string Language { get; set; }

       
    }
}

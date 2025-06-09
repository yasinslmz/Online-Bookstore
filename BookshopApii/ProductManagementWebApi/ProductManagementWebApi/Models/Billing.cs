using ProductManagementWebApi.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductManagementWebApi.Models
{
    public class Billing
    {
        public int id { get; set; }
        public int userId { get; set; }
        public string country { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string companyName { get; set; }
        public string address { get; set; }
        public string apartment { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string postcode { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public bool isApproved { get; set; }
        [NotMapped]
        public List<SoldProduct>? soldProducts { get; set; }
    }
}

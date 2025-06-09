using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Data;
using ProductManagementWebApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        ApplicationDbContext db;
        public ProductController(ApplicationDbContext db) { this.db = db; }


        // GET: api/<ProductController>
        [HttpGet]
        public IEnumerable<Product> Get()
        {

            return db.Product;
        }

        [HttpGet("Billing")]
        public List<Billing> Billing(int id)
        {
            var bills = db.Billing.Where(b => b.userId == id).ToList();
            var soldP = db.SoldProduct.Where(s => bills.Select(b => b.id).Contains(s.BillId)).ToList();

            var user=db.User.FirstOrDefault(u=>u.Id== id);

            if (user != null)
            {
               var billings=new List<Billing>() { };

                foreach (var b in bills)
                {
                    var bl=new Billing() {};

                    bl.id=b.id;
                    bl.isApproved=b.isApproved;
                    bl.soldProducts = soldP.Where(s => s.BillId == b.id).ToList();

                    billings.Add(bl);
                }

                

                return billings;
            }
            
                return null;
            
        }

        [HttpPost("Checkout")]
        [Authorize]
        public IActionResult Checkout([FromBody] Billing value)
        {

            if (value == null)
            {
                // Gelen Billing null ise, BadRequest dönebilirsiniz.
                return BadRequest("Invalid Billing data");
            }


            // Token'dan gelen kullanıcı bilgilerine erişim sağlanır
            var userNameClaim = User.Claims.FirstOrDefault(c => c.Type == "userName");

            if (userNameClaim != null)
            {
                // Token'dan gelen userName bilgisini alır
                var userName = userNameClaim.Value;

                // Kullanıcı listesinde bu userName'e sahip kullanıcıyı bul
                var user = db.User.FirstOrDefault(u => u.userName == userName);

                if (user != null)
                {

                    var bill = new Billing()
                    {
                        isApproved = true,
                        firstName = value.firstName,
                        lastName = value.lastName,
                        country = value.country,
                        address = value.address,
                        apartment = value.apartment,
                        city = value.city,
                        companyName = value.companyName,
                        email = value.email,
                        phone = value.phone,
                        postcode = value.postcode,
                        state=value.state,
                        userId=value.userId,
                        
                    };

                    db.Billing.Add(bill);
                    db.SaveChanges();

                    foreach(var sProduct in value.soldProducts) {
                        var soldP = new SoldProduct()
                        {
                            BillId = bill.id,
                            ProductId = sProduct.ProductId,
                            Quantity = sProduct.Quantity,

                        };
                        db.SoldProduct.Add(soldP);
                        

                    }

                    db.SaveChanges();


                    // Başarıyla eklendiği bildirilsin
                    return Ok();
                }
            }

            return BadRequest();
        }


        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public Product Get(int? id)
        {
            Product product = db.Product.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                return product;

            }

            return null;


        }

        //// POST api/<ProductController>
        //[HttpPost]
        //public ActionResult Post([FromBody] Product value)
        //{
        //    if (value == null)
        //    {
        //        return BadRequest();
        //    }

        //    int maxId = products.Max(p => p.Id);
        //    value.Id = maxId + 1;
        //    products.Add(value);

        //    return Ok();
        //}


        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Product value)
        {
            var product = db.Product.FirstOrDefault(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            product.Name = value.Name;
            product.Price = value.Price;
            product.Stock = value.Stock;
            product.CategoryId = value.CategoryId;
            product.IsStatus = value.IsStatus;

            return Ok();
        }


        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var product = db.Product.FirstOrDefault(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }

            product.IsStatus = false;
            db.SaveChanges();
            return Ok();
        }

    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Data;
using ProductManagementWebApi.Models;
namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        ApplicationDbContext db;

        public LoginController(ApplicationDbContext db)
        {
            this.db = db;
        }   

        public static List<User> users = new List<User>()
        {
            new User(){Id=1,email="yasin@gmail.com",password="123",firstName="yasin",lastName="solmaz",userName="yasins" }
        };


        [HttpGet]
        public List<User> Get()
        {
            return db.User.ToList();
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] User value)
        {
            var user = users.FirstOrDefault(user => user.email == value.email && user.password == value.password);

            if (user != null)
            {
                return Ok(user); // 200 OK
            }
            else
            {
                return NotFound(); // 404 Not Found
            }
        }
        [HttpPost("Register")]
        public IActionResult Register([FromBody] User value)
        {
            var user = db.User.FirstOrDefault(user => user.email == value.email && user.password == value.password);

            if (user == null)
            {
                db.User.Add(value);
                db.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound(); // 404 Not Found
            }
        }

    }
}

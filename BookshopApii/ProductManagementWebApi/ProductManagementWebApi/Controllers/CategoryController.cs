using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Data;
using ProductManagementWebApi.Models;
using System.Net;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        ApplicationDbContext db;
        public CategoryController(ApplicationDbContext db) { this.db = db; }
        
        [HttpGet]
        public List<Category> Get()
        {
            
            return db.Category.ToList();
        }

        [HttpGet("{id}")]
        public Category Get(int id)
        {
           
            

            Category category = db.Category.FirstOrDefault(x => x.Id == id);

            return category ;
        }

        [HttpPost]

        //public ActionResult Post([FromBody] Category value)
        //{
        //    if (value == null)
        //    {
        //        return BadRequest();
        //    }

        //    int maxId = categories.Max(p => p.Id);
        //    value.Id = maxId + 1;
        //    categories.Add(value);

        //    return Ok();
        //}

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Category value)
        {
            var category = db.Category.FirstOrDefault(x => x.Id == id);
            if (category == null)
            {
                return NotFound();
            }

            category.Name = value.Name;
            category.IsStatus = value.IsStatus;
            db.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var category = db.Category.FirstOrDefault(x => x.Id == id);
            if (category == null)
            {
                return NotFound();
            }

            category.IsStatus = false;
            db.SaveChanges();

            return Ok();
        }



    }
}

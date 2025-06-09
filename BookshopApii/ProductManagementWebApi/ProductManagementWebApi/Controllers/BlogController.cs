using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApi.Models;

namespace ProductManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        public static List<Blog> blogs = new List<Blog>
{
    new Blog { Id = 1, title = "Blog 1", content = "Content for Blog 1", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 2, title = "Blog 2", content = "Content for Blog 2", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 3, title = "Blog 3", content = "Content for Blog 3", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 4, title = "Blog 4", content = "Content for Blog 4", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 5, title = "Blog 5", content = "Content for Blog 5", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 6, title = "Blog 6", content = "Content for Blog 6", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 7, title = "Blog 7", content = "Content for Blog 7", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 8, title = "Blog 8", content = "Content for Blog 8", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 9, title = "Blog 9", content = "Content for Blog 9", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" },
    new Blog { Id = 10, title = "Blog 10", content = "Content for Blog 10", imagePath = "https://www.blog2print.com/wp-content/uploads/2015/10/b2p-header-craft-blog-book.jpg" }
        };


        [HttpGet]
        public List<Blog> Get()
        {

            return blogs;
        }


    }
}

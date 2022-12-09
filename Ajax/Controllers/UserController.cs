using Ajax.Data;
using Ajax.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ajax.Controllers
{
    public class UserController : Controller
    {

        private readonly ApplicationDbContext _db;

        public UserController(ApplicationDbContext db)
        {
            _db = db;
        }
        //   public IActionResult Index()
        //   {
        //       IEnumerable<User> objUserList = _db.Users;
        //       return View(objUserList);
        //   }
        //[HttpPost]
        //public JsonResult AddEmployee(User employee)
        //{
        //    var emp = new User()
        //    {
        //        Name = employee.Name,
        //        Place = employee.Place,
        //        Email = employee.Email,
        //        PhoneNumber = employee.PhoneNumber,
        //    };
        //    _db.Users.Add(emp);
        //    _db.SaveChanges();
        //    return new JsonResult(emp);
        //}

    }
}













//[HttpPost]
//[ValidateAntiForgeryToken]
//public IActionResult Create(User obj)
//{
//    if (obj.Name == obj.Place.ToString())
//    {
//        ModelState.AddModelError("first name", "The Lastname cannot exactly match the firstName.");
//    }
//    if (ModelState.IsValid)
//    {
//        _db.Users.Add(obj);
//        _db.SaveChanges();
//        return RedirectToAction();
//        TempData["success"] = "Category created successfully";
//    }
//    return View(obj);
//}



//public IActionResult Edit(int? id)
//{
//    if (id == null || id == 0)
//    {
//        return NotFound();
//    }
//    var usersFromDb = _db.Users.Find(id);
//    //var categoryFromDbFirst = _db.Categories.FirstOrDefault(u=>u.Id==id);
//    //var categoryFromDbSingle = _db.Categories.SingleOrDefault(u => u.Id == id);

//    if (usersFromDb == null)
//    {
//        return NotFound();
//    }

//    return View(usersFromDb);
//}

////POST
//[HttpPost]
//[ValidateAntiForgeryToken]
//public IActionResult Edit(User obj)
//{

//    if (ModelState.IsValid)
//    {
//        _db.Users.Update(obj);
//        _db.SaveChanges();
//        TempData["success"] = "Category updated successfully";
//        return RedirectToAction("Index");
//    }
//    return View(obj);
//}

////POST
//[HttpPost, ActionName("Delete")]
//[ValidateAntiForgeryToken]
//public IActionResult DeletePOST(int? id)
//{
//    var obj = _db.Users.Find(id);
//    if (obj == null)
//    {
//        return NotFound();
//    }

//    _db.Users.Remove(obj);
//    _db.SaveChanges();
//    TempData["success"] = "Category deleted successfully";
//    return RedirectToAction("Index");
//}

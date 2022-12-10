using Ajax.Data;
using Ajax.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ajax.Controllers
{
    public class AjaxController : Controller
    {


        private readonly ApplicationDbContext _db;

        public AjaxController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            return View();
        }
        public JsonResult UserList()
        {
            var data = _db.Users.ToList();
            return new JsonResult(data);
        }

        [HttpPost]
        
        public JsonResult AddEmployee(User employee)
        {
            var emp = new User()
            {
                Name = employee.Name,
                Place = employee.Place,
                Email = employee.Email,
                PhoneNumber = employee.PhoneNumber,
            };
            _db.Users.Add(emp);
            _db.SaveChanges();
            return new JsonResult("data is saved");
        }

        public JsonResult Delete(int id)
        {
            var data = _db.Users.Where(e => e.Id == id).SingleOrDefault();
            _db.Users.Remove(data);
            _db.SaveChanges();
            return new JsonResult("data deleted");
        }

        public JsonResult Edit(int id)
        {
            var data=_db.Users.Where(e => e.Id == id).SingleOrDefault();
            return new JsonResult(data);
        }

        [HttpPost]
        public JsonResult Update(User employee)
        {
            var data = _db.Users.Where(e => e.Id == employee.Id).SingleOrDefault();
            if(data != null)
            {
                data.Name = employee.Name;
                data.Place = employee.Place;
                data.Email = employee.Email;
                data.PhoneNumber = employee.PhoneNumber;
                _db.Users.Update(data);
                _db.SaveChanges();
                return new JsonResult("data updated");
            }
            else
            {
                return new JsonResult("data updated failed");
            }
         

            //_db.Users.Update(employee);
            //_db.SaveChanges();
            // return new JsonResult("data updated");
        }
    }
}

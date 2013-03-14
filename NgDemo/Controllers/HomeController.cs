using System;
using System.Web.Mvc;

namespace NgDemo.Controllers
{
    public class HomeController: Controller
    {
         public ActionResult Index()
         {
             return View();
         }

        public ActionResult BeerPrice()
        {

            return Json(new {MarketPrice= new Random().Next(200)}, JsonRequestBehavior.AllowGet);
        }
    }
}
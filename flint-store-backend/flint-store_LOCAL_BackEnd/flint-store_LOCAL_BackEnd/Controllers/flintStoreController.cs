using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace flint_store_LOCAL_BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class flintStoreController : ControllerBase
    {
       

        [HttpGet]
        public IEnumerable<Item> GetAllItems()
        {
            SqlConnectionStringBuilder stringBuilder = new SqlConnectionStringBuilder();
            stringBuilder.DataSource = "LOCALHOST\\SQLEXPRESS";
            stringBuilder.InitialCatalog = "flintStore";
            stringBuilder.IntegratedSecurity = true;
            DataAbstractionLayer.Open(stringBuilder);
            IEnumerable<Item> items = DataAbstractionLayer.SelectAllItems();

            DataAbstractionLayer.Close();

            return items;     
          
        }
    }
}

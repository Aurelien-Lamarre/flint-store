using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace flint_store_LOCAL_BackEnd
{
    public class Program
    {
        public static void Main(string[] args)
        {
            SqlConnectionStringBuilder stringBuilder = new SqlConnectionStringBuilder();
            stringBuilder.ConnectionString = "ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            stringBuilder.DataSource = "hackatuna.database.windows.net";
            stringBuilder.InitialCatalog = "flintStore";
            stringBuilder.UserID = "adtautavel";
            stringBuilder.Password = ""; //Insert Password !
            stringBuilder.ConnectTimeout = 60;
            stringBuilder.Encrypt = true;
            stringBuilder.TrustServerCertificate = false;
            stringBuilder.ApplicationIntent = 0 ;
            stringBuilder.MultiSubnetFailover = false;
            stringBuilder.IntegratedSecurity = true;
            DataAbstractionLayer.Open(stringBuilder);
            CreateHostBuilder(args).Build().Run();
            DataAbstractionLayer.Close();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}

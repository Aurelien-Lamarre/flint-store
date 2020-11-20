using System.Collections.Generic;
using System.Data.SqlClient;

namespace flint_store_LOCAL_BackEnd
{
    public class DataAbstractionLayer
    {
        private static SqlConnection _connection = new SqlConnection();

        public static void Open(SqlConnectionStringBuilder stringBuilder)
        {
            _connection.ConnectionString = stringBuilder.ConnectionString;
            _connection.Open();
        }
        public static void Close()
        {
            _connection.Close();
        }

        public static List<Item> SelectAllItems()
        {
            SqlCommand command = _connection.CreateCommand();
            command.CommandText = "SELECT * FROM Item";
            SqlDataReader reader = command.ExecuteReader();
            List<Item> items = new List<Item>();
            while (reader.Read())
            {
                Item item = new Item
                {
                    itemId = reader.GetInt32(0),
                    itemName = reader.GetString(1),
                    itemDescription = reader.GetString(2),
                    itemPrice = reader.GetDouble(3),
                    itemImg = reader.GetString(4)
                };
                items.Add(item);
            }
            reader.Close();
            return items;
        }
    }
}
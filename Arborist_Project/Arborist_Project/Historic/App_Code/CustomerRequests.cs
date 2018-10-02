using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
/// <summary>
/// Summary description for CustomerRequests
/// </summary>
public class CustomerRequests
{
    public int requestestimatId { get; set; }
    public string fname { get; set; }
    public string lname { get; set; }
    public string phone { get; set; }
    public string email { get; set; }
    public string comments { get; set; }

}

public class CustomerRequestManager
{

    // Adds a new student to the table
    public int AddRequest(CustomerRequests customerrequests, SqlConnection connection)
    {
        //Create the SQL Query for inserting a product
        // No need for null value in in column if autoincrement
        string sqlQuery = String.Format("Insert into RequestEstimate (FName, LName, Phone, Email, Comments) Values('{0}', '{1}', '{2}', '{3}', '{4}');"
       + "Select @@Identity", customerrequests.fname, customerrequests.lname, customerrequests.phone, customerrequests.email, customerrequests.comments);


        //Create a Command object
        // new SqlCommand("query", "SqlConnection"
        int requestID = 0;
        using (SqlCommand command = new SqlCommand(sqlQuery, connection))
        {
            //SqlCommand.ExecuteNonQuery executes query with no reutrns
            requestID = Convert.ToInt32((decimal)command.ExecuteScalar());


            //Close and dispose
        }
        return requestID;
    }

    public int SaveRequest(CustomerRequests customerrequests, SqlConnection connection)
    {

        //Create the SQL Query for inserting a product
        string createQuery = String.Format("Insert into RequestEstimate (FName, LName, Phone, Email, Comments) Values('{0}', '{1}', '{2}', '{3}', '{4}');"
        + "Select @@Identity", customerrequests.fname, customerrequests.lname, customerrequests.phone, customerrequests.email, customerrequests.comments);

        //Create the SQL Query for updating a product
        string updateQuery = String.Format("Update Products SET FName = '{0}', LName ='{1}', Phone = '{2}',Email= '{3}', Comments= '{4}' Where Id = '{5}';",
        customerrequests.fname, customerrequests.lname, customerrequests.phone, customerrequests.email, customerrequests.comments, customerrequests.requestestimatId);

        string query = (customerrequests.requestestimatId != 0) ? updateQuery : createQuery;

        int savedRequestID = 0;
        using (SqlCommand command = new SqlCommand(query, connection))
        {


            //Execute the command to SQL Server and return the newly created ID
            var commandResult = command.ExecuteScalar();

            savedRequestID =
                (commandResult != null) ? Convert.ToInt32(commandResult) : customerrequests.requestestimatId;



        }

        return savedRequestID;
    }


}

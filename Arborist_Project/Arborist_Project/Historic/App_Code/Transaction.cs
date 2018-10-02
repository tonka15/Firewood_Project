using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Transaction
/// </summary>
public class Transaction
{
    public int Id { get; set; }
    public string fname { get; set; }
    public string lname { get; set; }
    public string phone { get; set; }
    public string email { get; set; }
    public string street { get; set; }
    public string city { get; set; }
    public string state { get; set; }
    public string zip { get; set; }
    public string amount1 { get; set; }
    public string amount2 { get; set; }
    public string amount3 { get; set; }



    public Transaction()
    {
        //
        // TODO: Add constructor logic here
        //
    }
}
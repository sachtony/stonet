using System;
using System.IO;
using System.Globalization;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PayPal;
using CloudinaryDotNet;
using Account = CloudinaryDotNet.Account;
using Twilio.TwiML.Voice;

namespace app
{
    
    
    class Program
    {

        public abstract class Calendar : ICloneable
        {
            public abstract object Clone();
        }

        private System.Globalization.Calendar calendar;

        public System.Globalization.Calendar GetCalendar()
        {
            return calendar;
        }

        public void SetCalendar(System.Globalization.Calendar value)
        {
            calendar = value;
        }

        static void Main(string[] args)
            {
                System.Console.WriteLine();
                System.Console.WriteLine("Hello World");
                System.Console.WriteLine("Setup the current time " + DateTime.Now);
                System.Console.WriteLine("Connect with servers by SHA256:fQjpbbuyJBuGw9/HZGT+VNWahlcFdGGsYLzMk/al9kQ");
                System.Console.WriteLine("See blogs https://sachtony.wordpress.com and company infomation link: https://opencorporates.com/companies/vn/0014889477");
                System.Console.WriteLine("Set Microsite https://sachtony.dmc-microsite.com/");
                System.Console.WriteLine("Join network with Affiliate ID: 154558 and link: https://join.heliumtrack.app/sachtony");
                System.Console.WriteLine("Sign up for Coinbase Wallet using this link and join me in the world of crypto! https://coinbase-wallet.onelink.me/q5Sx/invite");
                System.Console.WriteLine("Build AdaptiveCard bot! https://adaptivecards.io/designer/");                

                string writeText = "brands";  // Create a text string
                File.WriteAllText("sachtony-brands.txt", writeText);  // Create a file and write the contents of writeText to it

                string readText = File.ReadAllText("sachtony-brands.txt"); // Read the contents of the file
                Console.WriteLine(readText); // Output the content

        }
    }
}

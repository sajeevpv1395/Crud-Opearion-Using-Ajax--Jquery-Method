using System.ComponentModel.DataAnnotations;

namespace Ajax.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public string Place { get; set; }

        public string Email { get; set; }

        public int PhoneNumber { get; set; }



    }
}

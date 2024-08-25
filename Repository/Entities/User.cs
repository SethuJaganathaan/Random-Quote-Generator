using System;
using System.Collections.Generic;

namespace Repository.Entities;

public partial class User
{
    public Guid UserId { get; set; }

    public string Username { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public byte[] ProfilePicture { get; set; }

    public Guid? RoleId { get; set; }

    public short? Status { get; set; }

    public virtual ICollection<Quote> Quotes { get; set; } = new List<Quote>();

    public virtual Role Role { get; set; }
}

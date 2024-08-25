using System;
using System.Collections.Generic;

namespace Repository.Entities;

public partial class Role
{
    public Guid RoleId { get; set; }

    public string Rolename { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}

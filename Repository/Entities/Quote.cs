using System;
using System.Collections.Generic;

namespace Repository.Entities;

public partial class Quote
{
    public Guid QuoteId { get; set; }

    public string QuoteText { get; set; }

    public string Author { get; set; }
}

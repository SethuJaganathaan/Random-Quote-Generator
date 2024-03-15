namespace Repository.Entities;

public partial class Quote
{
    public Guid QuoteId { get; set; }

    public string QuoteText { get; set; } = null!;

    public string Author { get; set; }

    public DateTime CreatedAt { get; set; }
}

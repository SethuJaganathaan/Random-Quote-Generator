using Repository.DTO;
using Repository.Entities;

namespace Repository.Interface
{
    public interface IQuoteRepository
    {
        Task<List<Quote>> GetQuotes();

        Task<Quote> GetQuoteById(Guid quoteID);

        Task<string> AddQuote(QuoteDTO quote);

        Task<Quote> RandomQuote();
    }
}
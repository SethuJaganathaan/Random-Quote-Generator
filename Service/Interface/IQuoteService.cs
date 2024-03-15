using Repository.DTO;
using Repository.Entities;

namespace Service.Interface
{
    public interface IQuoteService
    {
        Task<List<Quote>> GetQuotes();

        Task<Quote> GetQuoteById(Guid quoteID);

        Task<string> AddQuote(QuoteDTO quote);

        Task<Quote> RandomQuote();
    }
}
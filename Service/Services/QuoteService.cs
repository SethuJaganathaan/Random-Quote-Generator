using Repository.DTO;
using Repository.Entities;
using Repository.Interface;
using Service.Interface;

namespace Service.Services
{
    public class QuoteService : IQuoteService
    {
        private readonly IQuoteRepository _repository;
        public QuoteService(IQuoteRepository repository)
        {
            _repository = repository;
        }

        public async Task<string> AddQuote(QuoteDTO quote)
        {
            return await _repository.AddQuote(quote);
        }

        public async Task<Quote> GetQuoteById(Guid quoteID)
        {
            return await _repository.GetQuoteById(quoteID);
        }

        public async Task<List<Quote>> GetQuotes()
        {
            return await _repository.GetQuotes();
        }

        public async Task<Quote> RandomQuote()
        {
            return await _repository.RandomQuote();
        }
    }
}
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Repository.DTO;
using Repository.Entities;
using Repository.Interface;

namespace Repository.Repositories
{
    public class QuoteRepository : IQuoteRepository
    {
        private readonly QuoteContext _dbContext;
        private readonly IMapper _mapper;
        public QuoteRepository(QuoteContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public async Task<string> AddQuote(QuoteDTO quote)
        {
            var quotes = _mapper.Map<Quote>(quote);
            quotes.QuoteId = Guid.NewGuid();
            quotes.CreatedAt = DateTime.Now;

            _dbContext.Quotes.Add(quotes);

            await _dbContext.SaveChangesAsync();
            _mapper.Map<QuoteDTO>(quotes);
            return "Created successfully";
        }

        public async Task<Quote> GetQuoteById(Guid quoteID)
        {
            return await _dbContext.Quotes.FindAsync(quoteID);
        }

        public async Task<List<Quote>> GetQuotes()
        {
            return await _dbContext.Quotes.ToListAsync();
        }

        public async Task<Quote> RandomQuote()
        {
            Random random = new Random();
            int TotalCount = _dbContext.Quotes.Count();
            int RandomIndex = random.Next(0, TotalCount);
            return await _dbContext.Quotes.OrderBy(q => q.QuoteId).Skip(RandomIndex).FirstOrDefaultAsync();
        }
    }
}
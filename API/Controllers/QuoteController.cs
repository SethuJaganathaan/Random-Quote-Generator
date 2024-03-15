using Microsoft.AspNetCore.Mvc;
using Repository.DTO;
using Service.Interface;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class QuoteController : Controller
    {
        private readonly IQuoteService _service;
        public QuoteController(IQuoteService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetQuotes()
        {
            var result = await _service.GetQuotes();
            return Ok(result);
        }

        [HttpGet("Id")]
        public async Task<IActionResult> GetQuoteById(Guid quoteId)
        {
            var result = await _service.GetQuoteById(quoteId);
            return Ok(result);
        }

        [HttpGet("RandomQuote")]
        public async Task<IActionResult> RandomQuote()
        {
            var result = await _service.RandomQuote();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddQuote([FromForm] QuoteDTO quote)
        {
            var create = await _service.AddQuote(quote);
            return Ok(create);
        }
    }
}
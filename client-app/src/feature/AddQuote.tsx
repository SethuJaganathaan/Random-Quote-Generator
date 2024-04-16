import { useState } from 'react';
import axios from 'axios';

const AddQuote = () => {
  const [quote, setQuote] = useState({
    quoteText: '',
    author: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setQuote({
      ...quote,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate QuoteText
    if (!quote.quoteText || !quote.quoteText.trim()) {
      setMessage('Quote Text cannot be empty');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5012/Quote', {
        quoteText: quote.quoteText,
        author: quote.author
      });
      
      setMessage(response.data);
      setQuote({
        quoteText: '',
        author: ''
      });
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response?.data) {
        setMessage(error.response.data);
      } else {
        setMessage('Failed to create quote');
      }
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Create New Quote</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="quoteText" className="form-label">Quote Text</label>
            <textarea
              className="form-control"
              id="quoteText"
              name="quoteText"
              value={quote.quoteText}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={quote.author}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
        {message && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
};

export default AddQuote;

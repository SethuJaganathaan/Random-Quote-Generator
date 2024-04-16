import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, CardContent, CardHeader, Container, Form, FormTextArea, Label } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddQuote = () => {
  const [quote, setQuote] = useState({
    quoteText: '',
    author: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setQuote({
      ...quote,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!quote.quoteText || !quote.quoteText.trim()) {
      toast.error('Quote Text cannot be empty');
      return;
    }

    try {
      await axios.post('http://localhost:5012/Quote', {
        quoteText: quote.quoteText,
        author: quote.author
      });

      setQuote({
        quoteText: '',
        author: ''
      });

      toast.success('Quote created successfully!', {
        autoClose: 2000,
        onClose: () => {
          navigate('/Homepage');
        }
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        toast.error(error.response.data);
      } else {
        toast.error('Failed to create quote');
      }
    }
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <CardHeader>Create New Quote</CardHeader>
          <Form onSubmit={handleSubmit}>
            <div className='formdata'>
              <Label htmlFor="quoteText" className="form-label">Quote Text</Label>
              <FormTextArea
                id="quoteText"
                name="quoteText"
                value={quote.quoteText}
                onChange={handleChange}
                required
              />
              <Label htmlFor="author" className="form-label">Author</Label>
              <input
                type="text"
                id="author"
                name="author"
                value={quote.author}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" color='green' style={{ display: 'block', margin: 'auto', marginTop: '10px' }}>
              Create
            </Button>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddQuote;

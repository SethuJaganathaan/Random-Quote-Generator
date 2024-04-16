import { useState } from 'react';
import { Button, Card, CardContent, CardDescription, CardMeta, Container } from 'semantic-ui-react';

const RandomQuote = () => {
    const [quote, setQuote] = useState({
        quoteText: '',
        author: '',
        createdAt: ''
    });

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('http://localhost:5012/Quote/RandomQuote');
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            const data = await response.json();
            setQuote({
                quoteText: data.quoteText,
                author: data.author,
                createdAt: data.createdAt
            });
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    return (
        <Container>
            <Button color="green" content="Random" onClick={fetchRandomQuote} />
            {quote.quoteText && (
                <Card>
                    <CardContent>
                        <CardDescription>{quote.quoteText}</CardDescription>
                        <p style={{ borderRadius: '10px', backgroundColor: '#f0f0f0', padding: '5px', marginTop: '10px' }}>{quote.author}</p>
                        <CardMeta>Date: {quote.createdAt}</CardMeta>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default RandomQuote;

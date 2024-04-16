import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardMeta, Container, Button } from "semantic-ui-react";

interface Quote {
    quoteId: string;
    quoteText: string;
    author: string;
    createdAt: string;
}

const AllQuote: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [quotesPerPage] = useState<number>(4);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await axios.get<Quote[]>('http://localhost:5012/Quote');
                const formattedQuotes = response.data.map(quote => ({
                    ...quote,
                    createdAt: new Date(quote.createdAt).toLocaleDateString()
                }));
                setQuotes(formattedQuotes);
            }
            catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchQuotes();
    }, []);

    // Logic to get current quotes based on pagination
    const indexOfLastQuote = currentPage * quotesPerPage;
    const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
    const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

    // Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container>
            {currentQuotes.map((quote, index) => (
                <Card key={index} style={{ width: '500px', marginBottom: '20px' }}>
                    <CardContent>
                        <CardDescription>{quote.quoteText}</CardDescription>
                        <p style={{ borderRadius: '10px', backgroundColor: '#f0f0f0', padding: '5px', marginTop: '10px' }}>{quote.author}</p>
                        <CardMeta>Date: {quote.createdAt}</CardMeta>
                    </CardContent>
                </Card>
            ))}
            {/* Pagination controls */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {Array.from({ length: Math.ceil(quotes.length / quotesPerPage) }, (_, index) => (
                    <Button key={index + 1} onClick={() => paginate(index + 1)}>{index + 1}</Button>
                ))}
            </div>
        </Container>
    );
}

export default AllQuote;

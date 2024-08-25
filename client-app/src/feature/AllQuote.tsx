import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardMeta, Container, Button, Icon } from "semantic-ui-react";

interface Quote {
    quoteId: string;
    quoteText: string;
    author: string;
    createdAt: string;
}

const AllQuote: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [quotesPerPage] = useState<number>(2);

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

    const indexOfLastQuote = currentPage * quotesPerPage;
    const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
    const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(quotes.length / quotesPerPage)) {
            paginate(currentPage + 1);
        }
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
                    <CardContent>
                        <Button positive content='Delete' />
                    </CardContent>
                </Card>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <Button icon onClick={handlePrevPage} disabled={currentPage === 1}>
                    <Icon name='chevron left' />
                </Button>
                <span style={{ margin: '0 10px' }}>{currentPage}</span>
                <Button icon onClick={handleNextPage} disabled={currentPage >= Math.ceil(quotes.length / quotesPerPage)}>
                    <Icon name='chevron right' />
                </Button>
            </div>
        </Container>
    );
}

export default AllQuote;

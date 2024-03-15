import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardMeta, Container } from "semantic-ui-react";

interface Quote {
    quoteId: string;
    quoteText: string;
    author: string;
    createdAt: string;
}

// http://localhost:5012/Quote/RandomQuote

const AllQuote: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await axios.get<Quote[]>('http://localhost:5012/Quote');
                setQuotes(response.data.map(quote => ({
                    ...quote,
                    createdAt: new Date(quote.createdAt).toLocaleDateString() 
                })));
                console.log(response.data);
            }
            catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchQuotes();
    }, []);

    return (
        <Container>
            {quotes.map((quote, index) => (
                <Card key={index}>
                    <CardContent>
                        <CardDescription>{quote.quoteText}</CardDescription>
                        <p>{quote.author}</p>
                        <CardMeta>Date:{quote.createdAt}</CardMeta>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}

export default AllQuote;

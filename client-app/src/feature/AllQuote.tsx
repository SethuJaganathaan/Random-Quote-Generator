import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";

interface Quote {
    quoteId: string;
    quoteText: string;
    author: string;
    createdAt: string;
}

const AllQuote: React.FC = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await axios.get<Quote[]>('http://localhost:5012/Quote');
                setQuotes(response.data);
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
                <div key={index}>
                    <p>Quote: {quote.quoteText}</p>
                    <p>Author: {quote.author}</p>
                    <p>Date: {quote.createdAt}</p>
                </div>
            ))}
        </Container>
    );
}

export default AllQuote;

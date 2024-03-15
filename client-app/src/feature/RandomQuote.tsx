import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Container } from "semantic-ui-react"

const RandomQuote = () => {
    return (
        <Container>
            <Button color="green" content="Random" />
            <Card>
                <CardContent>
                    <CardDescription>Hardest choice requies strongest will</CardDescription>
                    <p>Thanos</p>
                    <CardMeta>Date:3/15/2024</CardMeta>
                </CardContent>
            </Card>
        </Container>
    )
}

export default RandomQuote;
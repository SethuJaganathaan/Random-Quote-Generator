import { Button, Grid } from "semantic-ui-react";
import AllQuote from "./AllQuote";
import RandomQuote from "./RandomQuote";

const Homepage = () => {
    return (
        <Grid>
            <Grid.Column width="7">
                <AllQuote />
            </Grid.Column>

            <Grid.Column width="5">
                <RandomQuote />
            </Grid.Column>
        </Grid>
    )
}

export default Homepage;
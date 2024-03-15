import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    Random Quote
                </Menu.Item>
                <Menu.Item as={NavLink} to='/All' name='Quotes' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Add' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
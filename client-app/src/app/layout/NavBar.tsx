import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/Homepage' header>
                    Random Quote
                </Menu.Item>
                <Menu.Item>
                    <Button as={NavLink} to='/add' positive content='Add' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
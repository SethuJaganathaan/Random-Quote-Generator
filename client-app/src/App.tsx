import { Container } from 'semantic-ui-react'
import NavBar from './app/layout/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Outlet />
      </Container>
    </>
  )
}

export default App

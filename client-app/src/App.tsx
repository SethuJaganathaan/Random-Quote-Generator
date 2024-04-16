import { Container } from 'semantic-ui-react'
import NavBar from './app/layout/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "5em" }}>
      <ToastContainer />
        <Outlet />
      </Container>
    </>
  )
}

export default App

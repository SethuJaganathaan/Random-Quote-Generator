import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />

)

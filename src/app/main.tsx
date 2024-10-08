import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './mocks/mockEnv'
import { RootProvider } from './providers/RootProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(<RootProvider />)
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './mocks/mockEnv'
import { RootProvider } from './providers/RootProvider'
import './i18n/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(<RootProvider />)
import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { GlobalContextPropvider } from './context/GlobalContext';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <GlobalContextPropvider>
     <App />
    </GlobalContextPropvider>
);

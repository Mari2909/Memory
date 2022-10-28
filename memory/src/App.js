import './App.css';
import words from './data';
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import Main from '../src/components/Main/Main';
import Memory from './components/Memory/Memory'
import NotFound from './components/NotFound/NotFound'
import { WordsContextProvider, WordsContext } from './components/Context/WordsContext';
import './assets/styles/style.modules.scss'
import './assets/fonts/fonts';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
      <WordsContextProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="main" element={<Main />} />
              <Route path="game" element={<Memory />} />
              <Route path="cards" element={<Cards words={words} />} />
              <Route path="/" element={<Main />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </WordsContextProvider>
    </BrowserRouter>
  );
}
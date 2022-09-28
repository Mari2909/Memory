import './App.css';
import words from './data';
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import './assets/styles/style.modules.scss'
import './assets/fonts/fonts';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Cards words={words} />
      </main>
    </div>
  );
}
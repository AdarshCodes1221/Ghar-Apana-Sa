import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from './components/Residencies/Residencies';
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  // Diagnostic: detect invalid imports that resolve to undefined (common cause of React #130 in prod)
  const components = { Header, Hero, Companies, Residencies, Value, Contact, GetStarted, Footer };
  const invalid = Object.entries(components).filter(([, Comp]) => typeof Comp !== 'function' && typeof Comp !== 'object');

  if (invalid.length > 0) {
    return (
      <div style={{padding: 20}}>
        <h2>Runtime import diagnostic</h2>
        <p>One or more component imports resolved to an unexpected type. This diagnostic helps identify import mismatches (default vs named) or case-sensitivity issues in production builds.</p>
        <ul>
          {Object.entries(components).map(([name, Comp]) => (
            <li key={name}>
              <strong>{name}:</strong> {String(typeof Comp)} {Comp === undefined ? '(undefined)' : ''}
            </li>
          ))}
        </ul>
        <p>Fix the listed imports (ensure correct default/named import and exact filename casing), then rebuild.</p>
      </div>
    );
  }

  return (
   <div className="App">
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
   </div>
  );
}

export default App;

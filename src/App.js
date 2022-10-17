import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experiences from "./components/experiences/Experiences";
//import { ThemeProvider } from 'styled-components';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
//import ErrorPage from "./components/errorPage/ErrorPage";
//import { GlobalStyles } from './styles/Global.styled';
import { Container } from "./styles/styledApp/App.Styled";

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/experiences' exact element={<Experiences />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  )
}

export default App



/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './_Styles/Global.styled';
import Header from './_Components/header/Header';
import Footer from './_Components/footer/Footer';
import Home from './_Components/home/Home';
import Experiences from './_Components/experiences/Experiences';
import About from './_Components/about/About';
import Contact from './_Components/contact/Contact';
import ErrorPage from './_Components/error/ErrorPage';
import { Container } from './_Styles/App.styled';
const theme = {
  colors: {
    header: '#2f2360',
    body: '#fff',
    footer: '#003333',
  },
}
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/experiences' exact element={<Experiences />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Container>
      </ThemeProvider>
    </Router>
  );}
export default App;*/

import './App.scss';
import Footer from './Components/Commons/Footer/Footer';
import Header from './Components/Commons/Header/Header';
import Container from './Components/Helpers/Container/Container';
import AOS from "aos";
import Home from './Components/Home/Home';
import { useState, useEffect } from "react";
import Switch from './Components/Commons/Switch/Switch';

const App = () => {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState();
  const switchTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      setIsChecked(true);
    } else if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      setIsChecked(false);
    }
  }

  const startTheme = () => {
    const startTheme = localStorage.getItem("theme");
    if (startTheme === "light") {
      setTheme("light");
      setIsChecked(false);
    } else if (startTheme === "dark") {
      setTheme("dark")
      setIsChecked(true);
    }
  }

  useEffect(() => {
    startTheme();
  }, [])

  AOS.init();

  return (
    <Container className="App" theme={theme}>
      <Header />
      <Home theme={theme}/>
      <Footer />
      <Switch onSwitchTheme={switchTheme} isChecked={isChecked}/>
    </Container>
  );
}

export default App;

import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs.tsx";
import Contact from "./components/Contact.tsx";
import Login from "./components/Login.tsx";

function App(){
  return (
    <div>
      <Sidenav />
      <Main />
    </div>
  )
}

function AboutUsPage(){
  return (
    <div>
      <Sidenav />
      <AboutUs />
      <Contact />
    </div>
  )
}

function LoginPage(){
    const handleLogin = (username: string, password: string) => {
        console.log(`Logging in with username: ${username} and password: ${password}`);
    };

    return (
        <div>
            <Sidenav />
            <Login onLogin={handleLogin} />
        </div>
    )
}

export default App;
export {AboutUsPage};
export {LoginPage};
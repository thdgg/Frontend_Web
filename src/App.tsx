import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs/AboutUs.tsx";
import Contact from "./components/Contact.tsx";
import Login from "./components/Login.tsx";
import History from "./components/History.tsx";

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

function HistoryPage({ userId }: { userId: string }) {
    return (
        <div>
            <Sidenav />
            <History userId={userId} />
        </div>
    )
}

export default App;
export {AboutUsPage};
export {LoginPage};
export {HistoryPage};
import {useContext} from 'react';
import {  BrowserRouter as Router, Routes ,Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthContext from "./context/AuthContext";

function App() {
    const { auth } = useContext(AuthContext);

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={ auth.isAuthenticated ? ( <Navigate to="/"/>) :( <LoginPage/>)}/>
                    <Route path="/" element={ auth.isAuthenticated ? ( <HomePage/> ): (<Navigate to="/login"/>) }/>
                    <Route path="/register" element={ auth.isAuthenticated ? <Navigate to="/"/> : <RegisterPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App;
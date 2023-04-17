import './styles/style.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import {Routes, Route, Link} from 'react-router-dom';
import Layout from './Layout';


function App() {

    return(
        
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Route>
        </Routes>
    </>

    )

}

export default App;
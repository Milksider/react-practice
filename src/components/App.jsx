import './styles/style.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage'
import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import CheckAuth from './CheckAuth'
import CheckNoAuth from './CheckNoAuth';
import { AuthProvider } from './AuthProvider';


function App() {

    return(
        
    <AuthProvider>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/login" element={ 
                    <CheckNoAuth>
                        <LoginPage />
                    </CheckNoAuth> 
                }/>
                <Route path="/register" element={ 
                    <CheckNoAuth>
                        <RegisterPage/>
                    </CheckNoAuth>
                } />
                <Route path="/main" element={
                    <CheckAuth>
                        <MainPage/>
                    </CheckAuth>
                } />
            </Route>
        </Routes>
    </AuthProvider>

    )

}

export default App;
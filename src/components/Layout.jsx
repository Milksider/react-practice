import './styles/style.css';
import {Link, Outlet} from 'react-router-dom';



function Layout() {

    return(
        <>
            <section className="header">
                <div className="nav">
                    <Link className="nav__link" to="/login">Login</Link>
                    <Link className="nav__link" to="/register">Register</Link>
                </div>
            </section>

            <Outlet/>
        </>
    )

}

export default Layout;
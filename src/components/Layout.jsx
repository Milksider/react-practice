import './styles/style.css';
import {Link, Outlet} from 'react-router-dom';



function Layout() {

    return(
        <>
            <Outlet/>
        </>
    )

}

export default Layout;
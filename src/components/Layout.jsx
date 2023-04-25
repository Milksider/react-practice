import './styles/style.css';
import {Outlet} from 'react-router-dom';



function Layout() {

    return(
        <>
            <Outlet/>
        </>
    )

}

export default Layout;
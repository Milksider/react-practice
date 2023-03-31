import LoginForm from '../Forms/LoginForm';
import {Routes, Route, Link} from 'react-router-dom';

import registerPage from '../pages/RegisterPage';

function LoginPage(){
return(
    <section class="forms">
    <div class="container">
      <div class="forms-inner">
        <div class="forms__content">

          <div class="logo">
            Your logo
          </div>

            <div className="switcher">
            <LoginForm/>
            </div>
           
        </div>
        <div class="forms__decor">
          <div class="forms__decor-inner">
            <img class="forms__decor-img" src="./decor-img.png" alt="" />
            <h2 class="forms__decor-title">
              Sign in to name
            </h2>
            <p class="forms__decor-text">
              Lorem Ipsum is simply 
            </p>
          </div>
        </div>
      </div>
    </div>
    <Routes>
          <Route path="/register" element={<registerPage/>} />
    </Routes>
  </section>
)
};

export default LoginPage;
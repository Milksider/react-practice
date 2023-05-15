import RegisterForm from '../Forms/RegisterForm'
import './Pages.css'

function RegisterPage(){

    return(
        <section class="forms">
        <div class="container">
          <div class="forms-inner">
            <div class="forms__content">
    
              <div class="logo">
                Your logo
              </div>
    
                <div className="switcher">
                <RegisterForm />
                </div>
               
            </div>
            <div class="forms__decor">
              <div class="forms__decor-inner">
                <img class="forms__decor-img" src="./decor-img.png" alt="" />
                <h2 class="forms__decor-title">
                  Sign up to name
                </h2>
                <p class="forms__decor-text">
                  Lorem Ipsum is simply 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
    };
    
    export default RegisterPage;
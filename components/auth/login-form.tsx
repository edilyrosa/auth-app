import { CardWrapper } from "./card-wrapper";




const LoginForm = () => {
    return ( 
        <CardWrapper 
            headerLaber="Welcome back" 
            backButtonLable="Don't have an account?" 
            backButtonHref="./auth/register"   
            showSocial     
            >       
            Login FORM
        </CardWrapper>
     );
}
 
export default LoginForm;
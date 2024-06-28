
import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
const ErrorCard = () => {
    return ( 
        <CardWrapper
            headerLaber="Oops! Something went wrong!"
            backButtonHref="auth/login"
            backButtonLable="Go back to login"

        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive"/>
            

            </div>
            
        </CardWrapper>
     );
}
 
export default ErrorCard;
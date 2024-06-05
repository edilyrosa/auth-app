'use client'
import {useRouter} from "next/navigation" //!NO FROM "next/router"

interface LoginButtonProps{
    children:React.ReactNode; //!ITS TDD
    mode?: "modal" | "redirect",  //!WILL BE A FLAT-PROP
    asChild?: boolean //!WILL BE A FLAT-PROP
}
export const LoginButton = ({
    children,
    mode = 'redirect',
    asChild
}:LoginButtonProps) => {
    const router = useRouter()
    const onClick = () =>{
        console.log('LOGIN BUTTON CLICKED');
        router.push('/auth/login')
    }

 
    if(asChild) return <span>I AM A FLAT</span> //!if it is true, return and go out of this function.
    if(mode === 'modal') return <span >TODO: Implement Modal</span>
    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}
'use client'
import { Card, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import { Hearder } from "@/components/auth/header";
import Social from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button"

interface CardWrapperProps {
   children: React.ReactNode;
   headerLaber: string;
   backButtonLable: string;
   backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({children, headerLaber, backButtonLable, backButtonHref, showSocial}
                            : CardWrapperProps) =>{
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Hearder label={headerLaber}>
                </Hearder>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && 
            <CardFooter>
                <Social/>
            </CardFooter>
            }
            <CardFooter>
                <BackButton
                label={backButtonLable}
                href={backButtonHref}
                />
            </CardFooter>
        </Card>
    )
}
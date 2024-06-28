'use client'
import {useForm} from 'react-hook-form'
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import * as z  from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from "@/schemas";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import { CardWrapper } from "./card-wrapper";
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { login } from '@/actions/login';

const LoginForm = () => {

    const searchParams = useSearchParams();
    const urlError = searchParams.get('error') === 'OAuthAccountNotLinked'
    ? 'Email already in use with different provider'
    : '';
    const [error, setError] = useState<string  | undefined>("") 
    const [success, setSuccess] = useState<string  | undefined>("") 
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{ //!THESE WAS DEFINED IN INDEX.TS
            email: '',
            password: '',
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
       
       setError('')
       setSuccess('')
        startTransition(()=>{
            login(values)
            .then((data) => {
                setError(data?.error)
                //TODO: Add when we add 2FA
                // setSuccess(data.success)
            })
        })
        
    }
    return ( 
        <CardWrapper 
            headerLaber="Welcome back" 
            backButtonLable="Don't have an account?" 
            backButtonHref="/auth/register"
            showSocial     
            >       
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-6'>
                        <FormField 
                            control={form.control} 
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                     <FormLabel>Email</FormLabel>
                                     <FormControl>
                                     <Input 
                                        {...field} 
                                        disabled={isPending} 
                                        type='email' 
                                        placeholder='edilyrosa@gmail.com'
                                     />
                                     </FormControl>
                                     <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <FormField 
                            control={form.control} 
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                     <FormLabel>Password</FormLabel>
                                     <FormControl>   
                                     <Input 
                                        {...field} 
                                        disabled={isPending}
                                        type='password' 
                                        placeholder='******'
                                    />
                                     </FormControl>
                                     <FormMessage/>
                                </FormItem>
                            )}
                            />
                    </div>
                    <FormError message={error || urlError} />
                    <FormSuccess message={success} />
                    <Button 
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    > Login</Button>
                </form>
            </Form>
        </CardWrapper>
     );
}
 
export default LoginForm;
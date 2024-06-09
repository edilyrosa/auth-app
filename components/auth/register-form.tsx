'use client'
import {useForm} from 'react-hook-form'
import { useState, useTransition } from 'react';

import * as z  from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from "@/schemas";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import { CardWrapper } from "./card-wrapper";
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { register } from '@/actions/register';

const RegisterForm = () => {

    const [error, setError] = useState<string  | undefined>("") 
    const [success, setSuccess] = useState<string  | undefined>("") 
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{ //!THESE WAS DEFINED IN INDEX.TS
            email: '',
            password: '',
            name: '',
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) =>{
       
       setError('')
       setSuccess('')
        startTransition(()=>{
            register(values)
            .then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
        
    }
    return ( 
        <CardWrapper 
            headerLaber="Create an account" 
            backButtonLable="Already have an account?" 
            backButtonHref="/auth/login"
            showSocial
     
            >       
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-6'>

                    <FormField 
                            control={form.control} 
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                     <FormLabel>Name</FormLabel>
                                     <FormControl>
                                     <Input 
                                        {...field} 
                                        disabled={isPending} 
                                        type='text' 
                                        placeholder='Your name'
                                     />
                                     </FormControl>
                                     <FormMessage/>
                                </FormItem>
                            )}
                            />


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
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button 
                        disabled={isPending}
                        type='submit'
                        className='w-full'
                    >Create an account</Button>
                </form>
            </Form>
        </CardWrapper>
     );
}
 
export default RegisterForm;
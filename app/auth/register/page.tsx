'use client'

import { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import Notification from '../../../components/Notification';
import { useRouter } from 'next/navigation';

function RegisterPage() {

  const [error, setError] = useState<string>('')
  const [messageNotification, setMessageNotification] = useState<string>('')
  const { register, handleSubmit, watch, formState: {errors}, reset } = useForm()
  const router = useRouter()


  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const onSubmit = handleSubmit( async data => {
    console.log({data})

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      console.log({ res })

      const response = await res.json()
      console.log(response)

      if(!res.ok) {
        setError(response.message)
        return
      }

      setMessageNotification('User created successfully')
      setTimeout(() => {
        setMessageNotification('')
        router.push('/auth/login')
      },1000)
      reset()
    } catch (error ) {
      console.log(error)
    }

  })

  return (
    <div className='container mx-auto flex flex-col justify-center items-center pt-16'>
      <h2 className='form-title'>Register</h2>
      <form 
        onSubmit={onSubmit}
        className='flex flex-col w-1/2 mx-auto'  
      >
        <label className='label' htmlFor='name' >Name</label>
        <input 
          type='text' 
          { ...register('name',
            {
              required: {
                value: true,
                message: 'Name is required'
              }
            }
          ) }
          className='input'
          placeholder='Luis'
          id='name'  
        />
        { errors.name && 
          <Notification message={ errors.name.message as string } type={ 'error' } />
        }
        <label className='label' htmlFor='lastName' >Last Name</label>
        <input 
          type='text' 
          { ...register('lastName',
            {
              required: {
                value: true,
                message: 'Last Name is required'
              }
            }
          ) }
          className='input'
          placeholder='Sanchez'
          id='lastName'  
        />
        { errors.name && 
          <Notification message={ errors.lastName?.message as string } type={ 'error' } />
        }

        <label className='label' htmlFor='nickName' >Nick Name</label>
        <input 
          type='text' 
          { ...register('nickName',
            {
              required: {
                value: true,
                message: 'Last Name is required'
              }
            }
          ) }
          className='input'
          placeholder='Sanchez' 
          id='nickName' 
        />
        { errors.name && 
          <Notification message={ errors.nickName?.message as string } type={ 'error' } />
        }
        
        <label className='label' htmlFor='email' >Email</label>
        <input 
          type='email' 
          { ...register('email',
            {
              required: {
                value: true,
                message: 'Email is required'
              }
            }
          ) }
          className='input' 
          placeholder='luis@example.com' 
          id='email'
        />
        { errors.name && 
          <Notification message={ errors.email?.message as string } type={ 'error' } />
        }

        <label className='label' htmlFor='address' >Address</label>
        <input 
          type='text' 
          { ...register('address',
            {
              required: {
                value: true,
                message: 'Address is required'
              }
            }
          ) }
          className='input'
          placeholder='Avenue 123'
          id='address'  
        />
        { errors.name && 
          <Notification message={ errors.address?.message as string } type={ 'error' } />
        }
        
        <label className='label' htmlFor='phone' >Phone</label>
        <input 
          type='text' 
          { ...register('phone',
            {
              required: {
                value: true,
                message: 'Phone is required'
              }
            }
          ) }
          className='input'
          placeholder='123456789'
          id='phone'  
        />
        { errors.name && 
          <Notification message={ errors.phone?.message as string } type={ 'error' } />
        }
        
        <label className='label' htmlFor='password' >Password</label>
        <input 
          type='password' 
          { ...register('password',
            {
              required: {
                value: true,
                message: 'Password is required'
              }
            }
          ) }
          className='input'
          id='password'  
        />
        { errors.name && 
          <Notification message={ errors.password?.message as string } type={ 'error' } />
        }

        <label className='label' htmlFor='confirmPassword' >Confirm password</label>
        <input 
          type='password' 
          { ...register('confirmPassword',
            {
              required: true
            }
          ) }
          className='input'
          id='confirmPassword'  
        />
        { errors.name && 
          <Notification message={ errors.confirmPassword?.message as string } type={ 'error' } />
        }

        {
          password !== confirmPassword && <Notification message="The passwords don't match" type='error' />
        }
        
        <button 
          type='submit'
          className='btn'
        >Send</button>
      </form>
      {
        error && <Notification message={ error } type={ 'error '} />
      }
      {
        messageNotification && <Notification message={ messageNotification } type={ 'success' } />
      }
    </div>
  )
}

export default RegisterPage
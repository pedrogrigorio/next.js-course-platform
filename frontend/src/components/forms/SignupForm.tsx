'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signupFormSchema = z.object({
  user: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
})

type signupFormData = z.infer<typeof signupFormSchema>

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()
  const usernameDev = 'dev'
  const passwordDev = 'dev'

  function handleSignin(data: signupFormData) {
    const { user, email, password, confirmPassword } = data
    console.log(data)

    if (user === usernameDev && password === passwordDev) {
      router.push('/')
    }
  }

  const { register, handleSubmit } = useForm<signupFormData>({
    resolver: zodResolver(signupFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col">
      <div className="mb-4 flex flex-col gap-6">
        <div className="flex h-14 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-4 py-2">
          <input
            type="text"
            placeholder="Usuário"
            {...register('user')}
            className="flex-1 border-none bg-transparent text-xl font-normal placeholder:text-gray-300 focus:ring-0"
          />
        </div>

        <div className="flex h-14 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-4 py-2">
          <input
            type="text"
            placeholder="Email"
            {...register('email')}
            className="flex-1 border-none bg-transparent text-xl font-normal placeholder:text-gray-300 focus:ring-0"
          />
        </div>

        <div className="flex h-14 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-4 py-2">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            {...register('password')}
            className="flex-1 border-none bg-transparent text-xl font-normal placeholder:text-gray-300 focus:ring-0"
          />
          {showPassword ? (
            <EyeOffIcon onClick={() => setShowPassword(false)} />
          ) : (
            <EyeIcon onClick={() => setShowPassword(true)} />
          )}
        </div>

        <div className="flex h-14 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-4 py-2">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirmar a senha"
            {...register('confirmPassword')}
            className="flex-1 border-none bg-transparent text-xl font-normal placeholder:text-gray-300 focus:ring-0"
          />
          {showConfirmPassword ? (
            <EyeOffIcon onClick={() => setShowConfirmPassword(false)} />
          ) : (
            <EyeIcon onClick={() => setShowConfirmPassword(true)} />
          )}
        </div>
      </div>

      <button type="submit" className="rounded-xl bg-red-500 py-3 text-xl">
        Cadastrar-se
      </button>
    </form>
  )
}

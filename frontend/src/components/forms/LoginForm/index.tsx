'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
  user: z.string(),
  password: z.string(),
  rememberMe: z.boolean(),
})

type loginFormData = z.infer<typeof loginFormSchema>

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const usernameDev = 'dev'
  const passwordDev = 'dev'

  function handleSignin(data: loginFormData) {
    const { user, password, rememberMe } = data
    console.log(data)
    console.log(rememberMe)

    if (user === usernameDev && password === passwordDev) {
      router.push('/home')
    }
  }

  const { register, handleSubmit } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col">
      <div className="mb-3 flex flex-col gap-6 text-base lg:text-xl">
        <div className="flex h-10 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-4 py-2 sm:h-12 lg:h-14">
          <input
            type="text"
            placeholder="Usuário"
            {...register('user')}
            className="flex-1 border-none bg-transparent text-xs font-normal placeholder:text-gray-300 focus:ring-0 sm:text-base"
          />
        </div>

        <div className="flex h-10 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-4 py-2 sm:h-12 lg:h-14">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            {...register('password')}
            className="flex-1 border-none bg-transparent text-xs font-normal placeholder:text-gray-300 focus:ring-0 sm:text-base"
          />
          {showPassword ? (
            <EyeOffIcon onClick={() => setShowPassword(false)} />
          ) : (
            <EyeIcon onClick={() => setShowPassword(true)} />
          )}
        </div>
      </div>

      <label className="mb-6 flex items-center gap-1 text-sm text-white hover:text-gray-100">
        <input
          type="checkbox"
          {...register('rememberMe')}
          className="h-4 w-4 rounded border-gray-400 bg-transparent text-blue-500"
        />
        Lembrar de mim
      </label>

      <button
        type="submit"
        className="rounded-xl bg-red-500 py-3 text-xl hover:bg-red-400"
      >
        Login
      </button>
    </form>
  )
}

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: 'Usuário deve ter pelo menos 4 caracteres.' })
      .regex(/^[a-z0-9_]+$/i, {
        message: 'Usuário deve ter apenas letras, números e underline.',
      })
      .transform((user) => user.toLowerCase()),
    email: z.string().email('Email inválido.'),
    password: z
      .string()
      .min(8, { message: 'Sua senha deve ter pelo menos 8 caracteres' })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).*$/, {
        message: 'Sua senha deve ter letras, números e caracteres especiais',
      }),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword
    },
    {
      message: 'As senhas não coincidem',
      path: ['confirmPassword'],
    },
  )

type signupFormData = z.infer<typeof signupFormSchema>

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [signupSuccessful, setSignupSuccessful] = useState(false)

  function handleSignin(data: signupFormData) {
    console.log(data)
    setSignupSuccessful(true)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupFormData>({
    resolver: zodResolver(signupFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col">
      <div className="flex flex-col">
        <div className="text-base lg:text-xl">
          <div className="flex h-10 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-2 py-2 sm:h-12 lg:h-14 lg:px-4">
            <input
              type="text"
              placeholder="Usuário"
              {...register('username')}
              className="min-w-0 flex-1 border-none bg-transparent px-0 text-xs font-normal placeholder:text-gray-300 focus:ring-0 sm:text-base"
            />
          </div>
          {errors.username ? (
            <span className="text-xs text-red-300">
              {errors.username.message}
            </span>
          ) : (
            <span className="text-sm opacity-0">placeholder</span>
          )}
        </div>

        <div>
          <div className="flex h-10 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-2 py-2 sm:h-12 lg:h-14 lg:px-4">
            <input
              type="text"
              placeholder="Email"
              {...register('email')}
              className="min-w-0 flex-1 border-none bg-transparent px-0 text-xs font-normal placeholder:text-gray-300 focus:ring-0 sm:text-base"
            />
          </div>
          {errors.email ? (
            <span className="text-xs text-red-300">{errors.email.message}</span>
          ) : (
            <span className="text-sm opacity-0">placeholder</span>
          )}
        </div>

        <div>
          <div className="flex h-10 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-2 py-2 sm:h-12 lg:h-14 lg:px-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              {...register('password')}
              className="min-w-0 flex-1 border-none bg-transparent px-0 text-xs font-normal placeholder:text-gray-300 focus:ring-0 sm:text-base"
            />
            {showPassword ? (
              <EyeOffIcon onClick={() => setShowPassword(false)} />
            ) : (
              <EyeIcon onClick={() => setShowPassword(true)} />
            )}
          </div>
          {errors.password ? (
            <span className="text-xs text-red-300">
              {errors.password.message}
            </span>
          ) : (
            <span className="text-sm opacity-0">placeholder</span>
          )}
        </div>

        <div>
          <div className="flex h-10 items-center gap-2 rounded-xl border-2 border-white bg-white bg-opacity-0 px-2 py-2 sm:h-12 lg:h-14 lg:px-4">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirmar a senha"
              {...register('confirmPassword')}
              className="min-w-0 flex-1 border-none bg-transparent px-2 text-xs font-normal placeholder:text-gray-300 focus:ring-0 sm:text-base"
            />
            {showConfirmPassword ? (
              <EyeOffIcon onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <EyeIcon onClick={() => setShowConfirmPassword(true)} />
            )}
          </div>
          {errors.confirmPassword ? (
            <span className="text-xs text-red-300">
              {errors.confirmPassword.message}
            </span>
          ) : (
            <span className="text-sm opacity-0">placeholder</span>
          )}
        </div>
      </div>

      {signupSuccessful ? (
        <span className="mb-2 text-sm text-green-500">
          Cadastrado com sucesso
        </span>
      ) : (
        <span className="mb-2 text-sm opacity-0">placeholder</span>
      )}
      <button
        type="submit"
        className="rounded-xl bg-red-500 py-3 text-base hover:bg-red-400 lg:py-3 lg:text-xl"
      >
        Cadastrar-se
      </button>
    </form>
  )
}

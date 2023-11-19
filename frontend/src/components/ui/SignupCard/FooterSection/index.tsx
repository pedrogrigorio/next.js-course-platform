import Link from 'next/link'

export default function FooterSection() {
  return (
    <div className="mt-1 text-sm sm:mt-6 lg:mt-16 lg:text-base">
      <div className="flex flex-col items-center justify-center gap-2">
        <Link href="/">
          <span className="font-medium">Já é cadastrado? Entrar</span>
        </Link>
        <div
          className="flex flex-col items-center gap-4 sm:flex-row"
          style={{
            background:
              'linear-gradient(180deg, rgba(98, 98, 98, 0.00) 0%, rgba(98, 98, 98, 0.07) 100%)',
          }}
        >
          <span>Termos e Condições</span>
          <span>Suporte</span>
          <span>Atendimento</span>
        </div>
      </div>
    </div>
  )
}

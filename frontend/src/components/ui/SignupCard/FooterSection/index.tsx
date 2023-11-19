import Link from 'next/link'

export default function FooterSection() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center gap-2">
        <Link href="/">
          <span className="font-medium">Já é cadastrado? Entrar</span>
        </Link>
        <div
          className="flex gap-4"
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

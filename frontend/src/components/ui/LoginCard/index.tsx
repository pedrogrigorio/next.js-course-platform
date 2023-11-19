import LoginForm from '@/components/forms/LoginForm'
import FooterSection from './FooterSection'
import LoginTitleSection from './LoginTitleSection'
import AditionalAuthOptions from '../AditionalAuthOptions'

export default function LoginCard() {
  return (
    <div
      className="relative max-w-[480px] overflow-hidden rounded-3xl "
      style={{ border: '2px solid rgba(175, 175, 175, 0.5)' }}
    >
      <div className="3xl:pt-24 z-20 flex flex-col gap-4 px-5 py-3 sm:px-10 sm:py-10 2xl:pt-14">
        <LoginTitleSection />
        <LoginForm />
        <div className="flex flex-col items-center justify-center gap-10">
          <span>Esqueceu a senha?</span>
          <AditionalAuthOptions />
        </div>
        <FooterSection />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-black p-4 opacity-[14%]" />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(321deg, rgba(191, 191, 191, 0.06) 5.98%, rgba(0, 0, 0, 0.00) 66.28%)',
        }}
      />
    </div>
  )
}

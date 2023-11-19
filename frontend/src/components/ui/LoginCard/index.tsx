import LoginForm from '@/components/forms/LoginForm'
import FooterSection from './FooterSection'
import AditionalOptions from './AditionalOptions'
import LoginTitleSection from './LoginTitleSection'

export default function LoginCard() {
  return (
    <div
      className="relative w-[480px] overflow-hidden rounded-3xl "
      style={{ border: '2px solid rgba(175, 175, 175, 0.5)' }}
    >
      <div className="z-20 flex flex-col gap-4 px-10 pb-10 pt-24">
        <LoginTitleSection />
        <LoginForm />
        <AditionalOptions />
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

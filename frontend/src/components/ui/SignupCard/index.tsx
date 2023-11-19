import SignupForm from '@/components/forms/SignupForm'
import SignupTitleSection from './SignupTitleSection'
import FooterSection from './FooterSection'
import AditionalAuthOptions from '../AditionalAuthOptions'

export default function SignupCard() {
  return (
    <div
      className="relative max-w-[480px] flex-1 overflow-hidden rounded-3xl "
      style={{ border: '2px solid rgba(175, 175, 175, 0.5)' }}
    >
      <div className="3xl:pt-24 z-20 flex flex-col gap-4 px-5 py-3 sm:px-10 sm:py-10 2xl:pt-14">
        <SignupTitleSection />
        <SignupForm />
        <AditionalAuthOptions />
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

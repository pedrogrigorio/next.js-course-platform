import NotificationDot from '@/components/icons/NotificationDot'
import Image from 'next/image'
import UserDropdownMenu from './UserDropdownMenu'

export default function User() {
  return (
    <div className="flex items-center gap-4">
      <Image
        width={32}
        height={32}
        alt="avatar"
        src="https://as1.ftcdn.net/v2/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg"
        className="rounded-full"
      />
      <UserDropdownMenu />

      <button>
        <NotificationDot size={24} />
      </button>
    </div>
  )
}

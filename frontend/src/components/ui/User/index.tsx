import NotificationDot from '@/components/icons/NotificationDot'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function User() {
  return (
    <div className="flex items-center gap-2">
      <Image
        width={32}
        height={32}
        alt="avatar"
        src="https://as1.ftcdn.net/v2/jpg/02/65/72/98/1000_F_265729869_mYcOBHGd1ifo9ocwmfDIc4tl5jN7M7sy.jpg"
        className="rounded-full"
      />
      <span className="text-sm">Thomas</span>
      <ChevronDown size={16} color="#808191" />
      <NotificationDot size={24} />
    </div>
  )
}

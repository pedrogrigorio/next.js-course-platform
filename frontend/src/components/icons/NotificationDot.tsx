interface IconProps {
  size: number
}

export default function NotificationDot({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6726 10.5524C17.6726 11.599 17.9492 12.2159 18.5579 12.9268C19.0192 13.4505 19.1667 14.1228 19.1667 14.8522C19.1667 15.5807 18.9273 16.2723 18.4478 16.8338C17.82 17.5069 16.9346 17.9366 16.031 18.0113C14.7216 18.1229 13.4114 18.2169 12.0837 18.2169C10.7553 18.2169 9.44587 18.1607 8.13646 18.0113C7.23205 17.9366 6.34668 17.5069 5.71972 16.8338C5.24018 16.2723 5 15.5807 5 14.8522C5 14.1228 5.14825 13.4505 5.60874 12.9268C6.23653 12.2159 6.49493 11.599 6.49493 10.5524V10.1974C6.49493 8.79578 6.84444 7.87926 7.56416 6.98204C8.63422 5.67357 10.3495 4.88882 12.0465 4.88882H12.121C13.8545 4.88882 15.6252 5.71134 16.677 7.07605C17.3595 7.95479 17.6726 8.8327 17.6726 10.1974V10.5524ZM9.64472 19.9395C9.64472 19.5199 10.0298 19.3277 10.386 19.2454C10.8026 19.1573 13.3411 19.1573 13.7576 19.2454C14.1138 19.3277 14.4989 19.5199 14.4989 19.9395C14.4782 20.339 14.2438 20.6932 13.92 20.9182C13.5001 21.2455 13.0073 21.4528 12.4921 21.5275C12.2072 21.5644 11.9273 21.5653 11.6523 21.5275C11.1363 21.4528 10.6435 21.2455 10.2245 20.9173C9.89981 20.6932 9.66542 20.339 9.64472 19.9395Z"
        fill="#808191"
      />
      <circle
        cx="17.0833"
        cy="5"
        r="3.6"
        fill="#EC5252"
        stroke="#1E2127"
        strokeWidth="1.2"
      />
    </svg>
  )
}

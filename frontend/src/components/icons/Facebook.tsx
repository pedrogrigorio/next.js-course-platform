interface IconProps {
  size: number
}

export default function Facebook({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_153_487)">
        <path
          d="M42.5 21C42.5 9.40209 33.0979 0 21.5 0C9.90209 0 0.5 9.40193 0.5 21C0.5 31.4816 8.17944 40.1696 18.2188 41.7449V27.0703H12.8867V21H18.2188V16.3734C18.2188 11.1103 21.354 8.20312 26.1507 8.20312C28.4484 8.20312 30.8516 8.61328 30.8516 8.61328V13.7812H28.2036C25.5947 13.7812 24.7812 15.4001 24.7812 17.0609V21H30.6055L29.6744 27.0703H24.7812V41.7449C34.8206 40.1696 42.5 31.4818 42.5 21Z"
          fill="#1877F2"
        />
        <path
          d="M29.6744 27.0703L30.6055 21H24.7812V17.0609C24.7812 15.3999 25.5948 13.7812 28.2036 13.7812H30.8516V8.61328C30.8516 8.61328 28.4484 8.20312 26.1507 8.20312C21.354 8.20312 18.2188 11.1103 18.2188 16.3734V21H12.8867V27.0703H18.2188V41.7449C19.3042 41.915 20.4013 42.0003 21.5 42C22.5987 42.0003 23.6958 41.915 24.7812 41.7449V27.0703H29.6744Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_153_487">
          <rect
            width={size}
            height={size}
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

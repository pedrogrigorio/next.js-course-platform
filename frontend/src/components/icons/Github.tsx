interface IconProps {
  size: number
}

export default function Github({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_153_490)">
        <path
          d="M21.5 0C9.8975 0 0.5 9.3975 0.5 21C0.5 30.2925 6.51125 38.1413 14.8587 40.9238C15.9087 41.1075 16.3025 40.4775 16.3025 39.9263C16.3025 39.4275 16.2763 37.7738 16.2763 36.015C11 36.9863 9.635 34.7287 9.215 33.5475C8.97875 32.9437 7.955 31.08 7.0625 30.5812C6.3275 30.1875 5.2775 29.2162 7.03625 29.19C8.69 29.1637 9.87125 30.7125 10.265 31.3425C12.155 34.5187 15.1738 33.6263 16.3813 33.075C16.565 31.71 17.1162 30.7912 17.72 30.2662C13.0475 29.7412 8.165 27.93 8.165 19.8975C8.165 17.6137 8.97875 15.7237 10.3175 14.2537C10.1075 13.7287 9.3725 11.5762 10.5275 8.68875C10.5275 8.68875 12.2863 8.1375 16.3025 10.8413C17.9825 10.3688 19.7675 10.1325 21.5525 10.1325C23.3375 10.1325 25.1225 10.3688 26.8025 10.8413C30.8188 8.11125 32.5775 8.68875 32.5775 8.68875C33.7325 11.5762 32.9975 13.7287 32.7875 14.2537C34.1263 15.7237 34.94 17.5875 34.94 19.8975C34.94 27.9562 30.0313 29.7412 25.3588 30.2662C26.12 30.9225 26.7763 32.1825 26.7763 34.1513C26.7763 36.96 26.75 39.2175 26.75 39.9263C26.75 40.4775 27.1438 41.1338 28.1938 40.9238C32.3628 39.5167 35.9856 36.8375 38.5521 33.2634C41.1185 29.6892 42.4993 25.4001 42.5 21C42.5 9.3975 33.1025 0 21.5 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_153_490">
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

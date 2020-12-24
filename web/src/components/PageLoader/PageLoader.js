const PageLoader = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-gray-800 bg-opacity-30 z-50 flex justify-center items-center">
      <div className="w-32 h-32 bg-white bg-opacity-50 rounded-md flex justify-center items-center">
        <svg
          width="76"
          height="76"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="8.042%"
              y1="0%"
              x2="65.682%"
              y2="23.865%"
              id="a"
            >
              <stop stopColor="#F5F3FF" stopOpacity="0" offset="0%" />
              <stop stopColor="#C4B5FD" stopOpacity=".431" offset="43.146%" />
              <stop stopColor="#8B5CF6" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
              <path
                d="M36 18c0-9.94-8.06-18-18-18"
                id="Oval-2"
                stroke="url(#a)"
                strokeWidth="2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </path>
              <circle fill="currentColor" cx="36" cy="18" r="1">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default PageLoader

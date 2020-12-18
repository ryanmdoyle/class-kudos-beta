const SubNav = ({
  view,
  viewList,
  viewGrid,
  viewFeedback,
  viewRedeemed,
  viewOptions,
}) => {
  return (
    <div className="w-full h-12 bg-purple-500 px-4 flex text-white">
      <div
        className="h-full flex items-center mr-12 relative"
        onClick={() => {
          viewList()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        <span>List</span>
        {view === 'list' && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-t"></div>
        )}
      </div>

      <div
        className="h-full flex items-center mr-12 relative"
        onClick={() => {
          viewGrid()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <span>Grid</span>
        {view === 'grid' && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-t"></div>
        )}
      </div>

      <div
        className="h-full flex items-center mr-12 relative"
        onClick={() => {
          viewFeedback()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
        <span>Feedback</span>
        {view === 'feedback' && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-t"></div>
        )}
      </div>

      <div
        className="h-full flex items-center mr-12 relative"
        onClick={() => {
          viewRedeemed()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
        <span>Redeemed</span>
        {view === 'redeemed' && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-t"></div>
        )}
      </div>

      <div
        className="h-full flex items-center mr-12 relative"
        onClick={() => {
          viewOptions()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="10" r="2" />
          <line x1="6" y1="4" x2="6" y2="8" />
          <line x1="6" y1="12" x2="6" y2="20" />
          <circle cx="12" cy="16" r="2" />
          <line x1="12" y1="4" x2="12" y2="14" />
          <line x1="12" y1="18" x2="12" y2="20" />
          <circle cx="18" cy="7" r="2" />
          <line x1="18" y1="4" x2="18" y2="5" />
          <line x1="18" y1="9" x2="18" y2="20" />
        </svg>
        <span>Options</span>
        {view === 'options' && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-t"></div>
        )}
      </div>
    </div>
  )
}

export default SubNav

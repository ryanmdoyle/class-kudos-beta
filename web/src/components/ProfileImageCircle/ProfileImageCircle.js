import { useState } from 'react'

const ProfileImageCircle = ({ profileImage, firstName, lastName }) => {
  let [image, isImage] = useState(true)
  return (
    <>
      {profileImage && image ? (
        <img
          src={profileImage}
          alt={`${firstName} ${lastName} profile`}
          onError={() => {
            isImage(false)
          }}
          className="h-8 w-8 rounded-full mr-2"
        ></img>
      ) : (
        <div className="h-8 w-8 rounded-full mr-2 bg-purple-700 flex items-center justify-center">
          <span className="text-xs text-white font-bold">
            {`
          ${firstName?.charAt(0).toUpperCase() || ''}
          ${lastName?.charAt(0).toUpperCase() || ''}
          `}
          </span>
        </div>
      )}
    </>
  )
}

export default ProfileImageCircle

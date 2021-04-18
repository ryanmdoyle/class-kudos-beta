import { useState } from 'react'
import GridStudentSquare from 'src/components/GridStudentSquare/GridStudentSquare'

const GroupGrid = ({ enrollmentsOfGroup }) => {
  const [selecting, setSelecting] = useState(false)
  const [selected, setSelected] = useState([])

  const handleSelect = (userId) => {
    if (selecting) {
      if (selected.includes(userId)) {
        const removed = [...selected]
        const userLocation = removed.indexOf(userId)
        removed.splice(userLocation, 1)
        setSelected(removed)
      } else {
        const added = [...selected, userId]
        setSelected(added)
      }
    }
  }

  return (
    <>
      <div className="w-full h-sub-full p-4">
        <div className="w-full flex justify-between mb-6">
          <div>
            <button
              onClick={() => {
                setSelecting(!selecting)
              }}
              className={`${
                selecting ? 'button-purple' : 'button-white'
              } mr-4 w-52`}
            >
              {selecting ? 'Cancel' : 'Select Multiple'}
            </button>
            {selecting && (
              <button className="button-green shadow-xl">Award</button>
            )}
          </div>
          <button className="button-white">Sort by: First</button>
        </div>

        <div className="w-full flex flex-wrap justify-center">
          {enrollmentsOfGroup?.map((enrolled) => {
            const {
              id,
              firstName: first,
              lastName: last,
              profileImage,
            } = enrolled?.user
            return (
              <GridStudentSquare
                key={id}
                userId={id}
                name={`${first} ${last}`}
                profileImage={profileImage}
                points={'987'}
                selcting={selecting}
                selected={selected}
                handleSelect={handleSelect}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GroupGrid

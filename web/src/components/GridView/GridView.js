import GridStudentSquare from 'src/components/GridStudentSquare/GridStudentSquare'

const GridView = ({ groupId }) => {
  return (
    <>
      <h1>Group {groupId}</h1>
      <div className="w-full h-sub-full p-4">
        <div className="w-full flex justify-between mb-6">
          <div>
            <button className="button-white mr-4">Select Multiple</button>
            <button className="button-green">Award</button>
          </div>
          <button className="button-white">Sort by: First</button>
        </div>

        <div className="w-full flex flex-wrap justify-between">
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
          <GridStudentSquare />
        </div>
      </div>
    </>
  )
}

export default GridView

// import { Link, routes } from '@redwoodjs/router'
import GridStudentSquare from 'src/components/GridStudentSquare/GridStudentSquare'
import SubNav from 'src/components/SubNav/SubNav'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const GridPage = () => {
  return (
    <DashboardLayout>
      <SubNav />
      <div className="w-full h-sub-full p-4">
        <div className="w-full flex justify-between mb-6">
          <div>
            <button className="h-8 bg-white rounded-md shadow hover:ring-2 ring-purple-700 px-8 mr-4 font-light">
              Select Multiple
            </button>
            <button className="h-8 bg-green-400 hover:bg-green-500 rounded-md shadow px-8 text-white">
              Award
            </button>
          </div>
          <button className="h-8 bg-white rounded-md shadow hover:ring-2 ring-purple-700 px-8 font-light">
            Sort by: First
          </button>
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
    </DashboardLayout>
  )
}

export default GridPage

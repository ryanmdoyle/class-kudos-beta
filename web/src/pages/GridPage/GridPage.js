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
    </DashboardLayout>
  )
}

export default GridPage

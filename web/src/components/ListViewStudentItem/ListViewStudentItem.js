const ListViewStudentItem = () => {
  return (
    <li className="h-12 w-full bg-white rounded-md shadow hover:ring-2 ring-purple-500 flex items-center justify-between px-4 mb-2">
      <div className="flex items-center">
        <img src="/profile.jpg" className="h-6 w-6 rounded-full mr-2"></img>
        <span className="text-normal">Student Name</span>
      </div>
      <div>
        <span className="justify-self-end text-green-500 font-bold">79</span>
      </div>
    </li>
  )
}

export default ListViewStudentItem

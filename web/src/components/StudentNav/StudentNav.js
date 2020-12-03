const StudentNav = () => {
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <span className="text-lg font-display mb-2">Classes</span>
      <ul>
        <li className="text-normal font-body pl-4 mb-2">primary holder</li>
      </ul>
      <span className="text-lg font-display mb-2 mt-2">Groups</span>
      <ul>
        <li className="text-normal font-body pl-4 mb-2">secondary holder</li>
      </ul>
    </div>
  )
}

export default StudentNav

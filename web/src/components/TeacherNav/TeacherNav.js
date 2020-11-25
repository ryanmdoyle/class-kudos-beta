const TeacherNav = () => {
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <span className="text-lg font-display mb-2">Classes</span>
      <ul>
        <li className="text-normal font-body pl-4 mb-2">Math</li>
        <li className="text-normal font-body pl-4 mb-2">Science</li>
      </ul>
      <span className="text-lg font-display mb-2 mt-2">Groups</span>
      <ul>
        <li className="text-normal font-body pl-4 mb-2">Cohort A</li>
        <li className="text-normal font-body pl-4 mb-2">E-Block</li>
      </ul>
    </div>
  )
}

export default TeacherNav

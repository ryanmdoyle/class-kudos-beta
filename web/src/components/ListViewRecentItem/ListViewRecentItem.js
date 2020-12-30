const ListViewRecentItem = ({ name, value, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <li className="h-12 w-full white-box flex items-center justify-between px-4 mb-2">
      <div className="flex items-center">
        <span className="text-normal">{name}</span>
      </div>
      <div className="justify-self-end">
        {date && <span className="text-gray-500 font-light">{date} - </span>}
        <span className="text-green-500 font-bold">{value}</span>
      </div>
    </li>
  )
}

export default ListViewRecentItem

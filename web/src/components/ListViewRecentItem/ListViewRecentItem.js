const ListViewRecentItem = ({ name, value, createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  const valueStyle = value > 0 ? 'text-green-500' : 'text-red-500'
  return (
    <li className="h-12 w-full white-box flex items-center justify-between px-4 mb-2">
      <div className="flex items-center">
        <span className={`${valueStyle} font-bold w-10`}>{value}</span>
        <span className="text-normal">{name}</span>
      </div>
      <div className="justify-self-end">
        {date && <span className="text-gray-500 font-light">{date}</span>}
      </div>
    </li>
  )
}

export default ListViewRecentItem

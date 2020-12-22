const ListViewRecentItem = ({ name, value }) => {
  return (
    <li className="h-12 w-full white-box flex items-center justify-between px-4 mb-2">
      <div className="flex items-center">
        <span className="text-normal">{name}</span>
      </div>
      <div>
        <span className="justify-self-end text-green-500 font-bold">
          {value}
        </span>
      </div>
    </li>
  )
}

export default ListViewRecentItem

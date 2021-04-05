const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleTimeString()} on{' '}
      {new Date(datetime).toLocaleDateString()}
    </time>
  )
}

export default timeTag

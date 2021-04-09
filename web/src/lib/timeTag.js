const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}{' '}
      on {new Date(datetime).toLocaleDateString()}
    </time>
  )
}

export default timeTag

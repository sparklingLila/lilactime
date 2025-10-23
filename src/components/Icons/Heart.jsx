
export const Heart = ( { color } ) => {

  const url = `img/tinyheart${color}.gif`;
  const alt = `${color} heart`
  const height = {
    height: '12px'
  };

  return (
    <>
      <img src={url} alt={alt} style={height} />
    </>
  )
}

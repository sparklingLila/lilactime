
export const Ribbon = ( { color } ) => {

  const url = `img/tinyribbon${color}.gif`;
  const alt = `${color} ribbon`
  const height = {
    height: '14px'
  };

  return (
    <>
      <img src={url} alt={alt} style={height}/>
    </>
  )
}

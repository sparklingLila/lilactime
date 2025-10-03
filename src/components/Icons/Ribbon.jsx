
export const Ribbon = ( { color } ) => {

  const url = `img/tinyribbon${color}.gif`;
  const alt = `${color} ribbon`
  const height = {
    height: '16px'
  };

  return (
    <>
      <img src={url} alt={alt} style={height}/>
    </>
  )
}

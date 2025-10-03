
export const Ribbon = ( { color } ) => {

  const url = `img/pix5ls-ribbon${color}.gif`;
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

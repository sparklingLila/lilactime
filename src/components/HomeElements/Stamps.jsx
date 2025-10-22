import stamps from '../../db/stamps.json';
import './homeElements.css'

export const Stamps = () => {
  return (
    <>
      <h1 className="text-pink2"><img src="img/sparkles.gif" alt="sparkles gif" /> STAMPS</h1>
      <div className='stamp-container'>
        {stamps.map(item => (
          <a href={item.source} target="_blank" key={item.id}><img src={item.url} alt={item.alt} className='stamp' /></a>
        ))}
      </div>
    </>
  )
}

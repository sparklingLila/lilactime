import { Heart } from '../Icons/Heart';
import { Star } from '../Icons/Star';
import './profile.css';

export const Profile = () => {
  return (
    <>
      <div className="sidebar-element">
        <div className='avatar-container'>
          <img src="img/avatar.png" className="avatar" alt="hinako avatar" />
          <h1>about me</h1>
        </div>
        <div className='profile'>
          <p>Lila <Star /> 35+ <Star /> she/her <Star /> feb 15th <Star /> 🇨🇱</p>
          <p>Hi, I'm Lila! I love colorful alt fashion, horror movies, magical girls, and almost all kinds of videogames~ I'm in lots of fandoms, and I've been a fanfic writer since 1999 <Star /> I also like crocheting, drawing, singing, and collecting mini Lalaloopsy <Heart color="lilac" /></p>
        </div>
      </div>
    </>
  )
}

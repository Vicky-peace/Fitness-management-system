// import React from 'react'
// import { Link } from 'react-router-dom'
// import Logo from '../images/logo.png'
// import {FaLinkedin} from 'react-icons/fa'
// import { AiOutlineTwitter } from 'react-icons/ai'
// import { AiOutlineInstagram } from 'react-icons/ai'
// const Footer = () => {
//   return (
//     <footer>
//         <div className='container footer__container'>
//             <article>
//                 <Link to = '/' className='logo'>
//                     <img src={logo} alt='Footer logo'/>
//                 </Link>
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ab vero. Quod maxime sit consectetur, nesciunt explicabo praesentium voluptatum accusamus!
//                 </p>
//                 <div className="footer__socials">
//                     <a href="#"><FaLinkedin/></a>
//                     <a href="#"><AiOutlineTwitter/> </a>
//                     <a href="#"> <AiOutlineInstagram/></a>
//                 </div>
//             </article>

//             <article>
//                 <h4>Permalinks</h4>
//                 <Link to= '/about'>About</Link>
//                 <Link to= '/plans'>Plans</Link>
//                 <Link to= '/trainers'>Trainers</Link>
//                 <Link to= '/gallery'>Gallery</Link>
//                 <Link to= '/contacts'>Contact</Link>
//                 <Link to= '/signin'>Sign In</Link>
//                 <Link to= '/signup'>Sign Up</Link>
//             </article>
//             <article>
//                     <h4>Insights</h4>
//                     <Link to='/s'>Blog</Link>
//                     <Link to='/s'>Case Studies</Link>
//                     <Link to='/s'>Events</Link>
//                     <Link to='/s'>Communities</Link>
//                     <Link to='/s'>FAQs</Link>
//                 </article>

//                 <article>
//                     <h4>Get In Touch</h4>
//                     <Link to='/contact'>Contact us</Link>
//                     <Link to='/s'>Support</Link>
//                 </article>
//         </div>
//         <div className="footer__copyright">
//             <small>2023 Fitness &copy; All Rights Reserved</small>
//         </div>
//     </footer>
//   )
// }

// export default Footer
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import {  FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'


const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                <Link to='/' className='logo'>
  <img src={Logo} alt="Footer logo" style={{ background: 'transparent', width: '50px', height: '50px', borderRadius: '50%' }} />
</Link>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla magni nihil sapiente deserunt odit odio.
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter /></a>
                        <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram /></a>
                    </div>
                </article>
            
                <article>
                 <h4>Permalinks</h4>
                 <Link to= '/about'>About</Link>
                 <Link to= '/plans'>Plans</Link>
                 <Link to= '/trainers'>Trainers</Link>
                 <Link to= '/gallery'>Gallery</Link>
                 <Link to= '/contacts'>Contact</Link>
                 <Link to= '/signin'>Sign In</Link>
                 <Link to= '/signup'>Sign Up</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2023 Fitness Club &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
import GIT_LOGO from '../../assets/img/github.png'
import IG_LOGO from '../../assets/img/instagram.png'
import LI_LOGO from '../../assets/img/linkedin.png'

export default function SocialLinks(){

    return(

    <div className='social__container gradient-border '>

        <h3>Redes Sociales</h3>
        <div>

            <span className='social__card'> <img src={GIT_LOGO} alt="logo de GitHub" /><a href="https://github.com/AlfonsoJBF"  target='_blank'>GitHub</a></span>
            <span className='social__card'> <img src={LI_LOGO} alt="Logo de LinkedIn" /><a href="" target='_blank'>LinkedIn</a></span>
            <span className='social__card'> <img src={IG_LOGO} alt="Logo de Instagram" /><a href="https://www.instagram.com/alfonso.bustoosf/" target='_blank'>Instagram</a></span>
                
        </div>
    </div>
    )
}
import './Footer.css'

export default function Footer() {

    return(<>
    <footer className='Footer'>
        <div>
            <h2>Jorge Garnica</h2>
            <h3>Proyecto ReactJS para Coderhouse</h3>
        </div>
        <ul className='footerLinks'>
            <li><a href="https://www.instagram.com/k_hyuga_9?igsh=ODZ0YTNraWxuanZl" target='blank'>Instagram</a></li>
            <li><a href="https://x.com/hyuga_9?t=YtiWv8HoH2RBqoXk8oejrw&s=09" target='blank'>Twitter / X</a></li>
            <li><a href="https://www.linkedin.com/in/jorge-marcelo-garnica-14a7925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>Linkedin</a></li>
        </ul>
    </footer>
    </>)
}
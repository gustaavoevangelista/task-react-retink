import './Footer.css'

export default function Footer(){
    return (
        <>
            <footer>
                <div className='company-details'>
                    <div className='company-contacts'>
                        <div className="footer-logo">
                            <img src='/img/footer/logo-footer.png' alt='retink logo'></img>
                        </div>

                        <div className='other-details'>
                            <div>
                                <p>Product by Retink Media UG</p>
                                <p>Bonn, Germany</p>
                            </div>
                            <div>
                                <p>Get Early Access</p>
                                <p>Provide Feedback</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='company-social-media'>
                        <p>Connect with Us</p>
                        <ul>
                            <a href='/'><img src='/img/footer/Facebook.png' alt='facebook logo'></img></a>
                            <a href='/'><img src='/img/footer/Twitter.png' alt='twitter logo'></img></a>
                            <a href='/'><img src='/img/footer/Instagram.svg' alt='instagram logo'></img></a>
                            <a href='/'><img src='/img/footer/LinkedIn.png' alt='linkedin logo'></img></a>
                            <a href='/'><img src='/img/footer/YouTube.png' alt='youtube logo'></img></a>
                            <a href='/'><img src='/img/footer/Pinterest.png' alt='pinterest logo'></img></a>
                        </ul>
                    </div>
                </div>

                <div className='company-license-policy'>
                    <div className='license'>
                        Copyright &copy; 2021 Retink
                    </div>

                    <div className='policy'>
                        <a href='/'>Privacy Policy</a>
                        <a href='/'>Terms of Service</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
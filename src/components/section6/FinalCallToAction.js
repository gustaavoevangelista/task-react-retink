import './FinalCallToAction.css'

export default function FinalCallToAction(){
    return (
        <>
            <div className='final-container'>
                <div>
                    <span className='final-title'>Sign Up For The BETA to see more</span>
                </div>
                <br />
                <br />
                <div className='final-inputs'>
                    <input type='text' placeholder='Business Name'></input>
                    <input type='text' placeholder='@email address'></input>
                </div>
                <br />
                <br />
                <div className='final-buttons'>
                    <button type='submit' className='notify-button'>Notify me</button>
                    
                    <button type='submit' className='freelance-button'>
                        <a href='https://retink.io/fap/'>Sign up as a freelancer partner</a>
                    </button>
                </div>
            </div>
        </>
    )
}
import './CallToAction.css'
import React from 'react';


class CallToAction extends React.Component{
    constructor(props){
        super(props);
        this.state = {animate:false}
    }

    componentDidMount() {
        this.setState({ animate: true })
    }

    render(){
        return (
            <>
                <div className='wrapper'>
                    <div className='call-to-action'>
                        <h1>
                            <span>Get Advanced AI + Expert Created </span>
                            <span className='h1-span'>Logos</span>
                        </h1>

                        <p>
                            Boost your sales <span className='p-span'>10x faster</span> with content customized by our unique partnership of <span className='p-span'>human creativity and AI optimization</span>
                        </p>

                        <div className='form-wrapper'>
                            <form >
                                <div className='inputs'>
                                    <h3>Sign Up For The Beta!</h3>
                                    <input type='text' placeholder='Business Name'></input>
                                    <span> would like a beta invite sent to </span>
                                    <input type='email' placeholder='@email address'></input>
                                    <span>when it's ready!</span>
                                </div>

                                <br></br>

                                <div className={this.state.animate ? 'buttons' : ""}>
                                    <button type='submit' className='notify-button'>Notify me</button>
                                    <button className='freelance-button'><a href='https://retink.io/fap/'>Sign up as a freelancer partner</a></button>
                                </div>

                            </form>
                        </div>

                    </div>

                    <div className='animation'>
                        <img src='/img/section1/Retink-avatar.png' alt='avatar'></img>
                    </div>

                </div>
            </>
        )
    }
}
export default CallToAction
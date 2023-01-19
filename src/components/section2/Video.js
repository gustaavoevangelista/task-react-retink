import './Video.css'

export default function Video(){
    return (
        <>
            <h1 className='title-section2'>EXPLAINER VIDEO</h1>
            <br/>
            <br/>

            <div className='video-section2'>
                <iframe 
                src="https://www.youtube.com/embed/u1wprFtkMLg" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>

                </iframe>
                    
                
            </div>
        </>
    )
}
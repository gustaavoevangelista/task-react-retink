import './Section2.css'

export default function Section2(){
    return (
        <>
            <h1 className='title-section2'>EXPLAINER VIDEO</h1>
            <br/>
            <br/>
            <br/>
            <div className='video-section2'>
                <iframe 
                width="730" 
                height="415" 
                src="https://www.youtube.com/embed/u1wprFtkMLg" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>

                </iframe>
                    
                
            </div>
        </>
    )
}
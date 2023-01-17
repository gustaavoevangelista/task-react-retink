import './Section3.css'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';


export default function Section3() {
    const [data, setData] = useState([])

    const fetchJson = () => {
        fetch('./section3.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data);

            })
    }

    useEffect(() => {
        fetchJson()
    }, [])

    return (
        <>
            <div className='cards'>
                {data.map((i, key) => {
                    return (
                        <Card key={key} className="card-bootstrap">
                            <Card.Img  variant="top" src={`/img/section3/${i.img}`} />

                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>
                                    {i.title}
                                </Card.Title>

                                <Card.Text className='card-text'>
                                    {i.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )

                })
                }
                
            </div>
            
        </>
    )
}
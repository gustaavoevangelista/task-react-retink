import './Section5.css'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

export default function Section5() {
    const [data, setData] = useState([])

    const fetchJson = () => {
        fetch('./section5.json')
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
            <div className='cards-section5'>
                {data.map((index, key) => {
                    return (
                        <Card key={key} className="card-section5">
                            <Card.Img className="card-img-section5" variant="top" src={`/img/section5/${index.img}`} />

                            <Card.Body className='card-body-section5'>
                                <Card.Title className='card-title-section5'>
                                    {index.title}
                                </Card.Title>

                                <Card.Text className='card-text-section5'>
                                    {index.text}
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
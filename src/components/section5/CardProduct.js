import './CardProduct.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';


export default function CardProduct() {
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
                            <CardActionArea className='card-action-area'>
                                <CardMedia
                                    className='card-img-section5'
                                    component="img"
                                    image={`/img/section5/${index.img}`}
                                    
                                />
                                <CardContent className='card-body-section5'>
                                    <Typography gutterBottom variant="h5" component="div" className='card-title-section5'>
                                        {index.title}
                                        <span></span>
                                    </Typography>
                                    <Typography className='card-text-section5' >
                                        {index.text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}

            </div>
        </>
    )
}
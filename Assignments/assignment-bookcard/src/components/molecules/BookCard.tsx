import React from 'react';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import BookTitle from '../atoms/BookTitle';
import Author from '../atoms/Author';
import ReadTime from './ReadTime';
import More from '../atoms/More';
import Typography from '@mui/material/Typography';
import photo from '../assets/image.png';
import useStyles from '../styles/useStyles';

const BookCard = () => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.cardStyle}>
                <CardMedia
                    component="img"
                    width="294.1"
                    height="292"
                    image={photo}
                    alt="Beyond Entrepreneurship"
                />
                <BookTitle name="Beyond Entrepreneurship" />
                <Author name="Jim Collins & Bill Lazier" />
                <ReadTime time={13} />
                <More />
                <Typography className={classes.readBar} />
            </Card>
        </div>
    )
}

export default BookCard;

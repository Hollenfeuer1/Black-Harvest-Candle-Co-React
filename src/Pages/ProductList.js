import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/shopContext';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { palette } from '@mui/system';
import { Container, Text, Div, Row, Col } from 'atomize';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { fetchAllProducts, products } = useContext(ShopContext);

    useEffect(() => {
        fetchAllProducts ()
        return () => {

        };
    }, [fetchAllProducts])

    if(!products) return (
        <Skeleton id='product-page-loading' variant="rectangular" width={210} height={118} />
    )

    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id} size='5'>
                        <Link to={`/product/${product.handle}`}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia 
                                    component='img'
                                    height='200'
                                    image={product.images[0].src} />
                                </CardActionArea>
                            <CardContent>
                            <Typography variant='h2'>{product.title}</Typography>
                            <Text>{product.variants[0].price}</Text>
                            </CardContent>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
  }
  
  export default ProductList;

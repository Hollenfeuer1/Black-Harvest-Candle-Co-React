import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/shopContext';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { Text, Div, Row, Col, Container } from 'atomize';

function ProductPage() {

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext);

    useEffect(() => {
        fetchProductWithId(id)
        return() => {
            
        };
    }, [ fetchProductWithId, id ])

    if(!product.title) return <div>Loading</div>

    return (
        <Container>
            <Row>
                <Col>
                    <Div 
                    bgImg={product.images[0].src}
                    bgSize='cover'
                    bgPos='center center'
                    h='40rem'
                    />
                    <Div 
                    bgImg={product.images[1].src}
                    bgSize='cover'
                    bgPos='center center'
                    w='10rem'
                    h='10rem'
                    />
                </Col>
                <Col>
                    <Typography variant='h1'>{product.title}</Typography>
                    <Text>${product.variants[0].price}</Text>
                    <Button id='add-to-cart-btn' variant='contained' onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
                </Col>
            </Row>
            <Row>
                <Text className='product-description'>{product.description}</Text>
            </Row>
        </Container>
    );
  }
  
  export default ProductPage;
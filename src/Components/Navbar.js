import React, {useContext} from 'react';
import { Container, Anchor } from 'atomize';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ShopContext } from '../Context/shopContext';

const Navbar = () => {

    const { openCart } = useContext(ShopContext)

    return (
        <Container d='flex' flexDir='row' p='2rem' justify='space-between'>
            <Link to='product-list'>SHOP</Link>
            <Link to='about-us'>ABOUT</Link>
            <Link to='/'>
                <Card sx={{ maxWidth: 282, boxShadow: 0, backgroundColor: 'transparent'  }}>
                    <CardMedia
                        component='img'
                        image='BHCC_Logo.png'
                        alt='Black Harvest Candle Co' />
                </Card>
            </Link>
            <Link to='contact-us'>CONTACT US</Link>
            <Anchor onClick={() => openCart()}><ShoppingCartIcon /></Anchor>
        </Container>
    );
  }
  
  export default Navbar;
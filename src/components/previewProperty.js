import React from 'react';
import Icons from './icons';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;

const Card = styled.div`
    border: 1px solid #e1e1e1;
    img {
        max-width: 100%;
    }
`;

const CardBody = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
`;

const PreviewProperty = ({property}) => {
    const { name, image, bathrooms, price, parking, bedrooms } = property;

    const cardImage = getImage(image.localFile);

    return ( 
        <Card>
            <GatsbyImage image={cardImage} alt={`${name} image`} />

            <CardBody>
                <h3>{name}</h3>

                <p className="price">$ {price} </p>

                <Icons 
                    bathrooms={bathrooms}
                    parking={parking}
                    bedrooms={bedrooms}
                />

                <Button to={urlSlug(name)}>
                    View Property
                </Button>
            </CardBody>
        </Card>

    );
}
 
export default PreviewProperty;
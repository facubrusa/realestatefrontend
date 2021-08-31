import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Icons from './icons';
import Layout from './layout';
import { graphql } from 'gatsby';

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
    .price {
        font-size: 2.5rem;
        color: #75AB00;
    }
    .agent {
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`;

const Title = styled.h1`
    margin: 2rem 0;
    font-weight: 400;
`;

export const query = graphql`
    query($id: String!) {
        allStrapiProperties(filter: { id: { eq: $id }}) {
            nodes {
                name
                description
                bathrooms
                parking
                bedrooms
                price
                agents {
                    name
                    phone_number
                    email
                }
                image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                width: 799
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    }
`;

const Property = ({data}) => {
    const { name, description, image, bathrooms, price, parking, 
        bedrooms, agents } = data.allStrapiProperties.nodes[0];
    
    const cardImage = getImage(image.localFile);
    
    return ( 
        <Layout>
            <Title>{name}</Title>
            <Content>
                <main>
                    <GatsbyImage image={cardImage} alt={`${name} image`} />
                    <p>{description}</p>
                </main>
                <Sidebar>
                    <p className="price">$ {price}</p>
                    <Icons 
                        bathrooms={bathrooms}
                        parking={parking}
                        bedrooms={bedrooms}
                    />

                    <div className="agent">
                        <h2>Seller:</h2>
                        <p>Name: {agents.name}</p>
                        <p>Phone: {agents.phone_number}</p>
                        <p>Email: {agents.email}</p>
                    </div>
                </Sidebar>
            </Content>
        </Layout>
    );
}
 
export default Property;
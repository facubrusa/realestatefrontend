import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from './layout';
import { graphql } from 'gatsby';
import ListProperties from './listProperties';

const ContentPage = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Title = styled.h1`
    margin: 2rem 0;
    font-weight: 400;
`;

export const query = graphql`
    query($id: String!){
        allStrapiPages(filter: {id: {eq: $id}}) {
            nodes {
              name
              content
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
        }
    }  
`;

const Pages = ({data}) => {
    const { name, content, image } = data.allStrapiPages.nodes[0];
    
    const cardImage = getImage(image.localFile);
    
    return (
        <Layout>
            <main className="conteiner">
                <Title>{name}</Title>
                <ContentPage>
                    <GatsbyImage image={cardImage} alt={`${name} image`} />
                    <p>{content}</p>
                </ContentPage>

                {name === "Properties" && <ListProperties />}
            </main>
        </Layout>
    );
}
 
export default Pages;
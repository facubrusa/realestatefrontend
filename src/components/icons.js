import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;

const Icons = ({bathrooms, parking, bedrooms}) => {
    const { icons } = useStaticQuery(graphql`
        query {
            icons: allFile(filter: {relativeDirectory: { eq: "icons" }}) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }      
    `);

    // console.log(icons);

    const iconsImages = icons.edges;
    return ( 
        <ListIcons>
            <li>
                <img src={iconsImages[1].node.publicURL} alt="parking icon" />
                <p>{parking}</p>
            </li>
            <li>
                <img src={iconsImages[0].node.publicURL} alt="bedrooms icon" />
                <p>{bedrooms}</p>
            </li>
            <li>
                <img src={iconsImages[2].node.publicURL} alt="bathrooms icon" />
                <p>{bathrooms}</p>
            </li>
        </ListIcons>
    );
}
 
export default Icons;
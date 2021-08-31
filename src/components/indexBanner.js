import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import * as heroCSS from '../css/hero.module.css';

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`;

const IndexBanner = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq: "encuentra.jpg"}) {
            childImageSharp {
              fluid (maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
      }
    `);

    return (
        <ImageBackground
            tag="section"
            fluid={image.childImageSharp.fluid}
            fadeId="soft"
        >
            <div className={heroCSS.imagebg}>
                <h3 className={heroCSS.title}>Find the home of your dreams</h3>
                <p>15 years of experience</p>
            </div>
        </ImageBackground>
    );
}
 
export default IndexBanner;
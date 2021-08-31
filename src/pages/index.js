import React from 'react';
import Layout from '../components/layout';
import useIndex from '../hooks/useIndex';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import * as heroCSS from '../css/hero.module.css';
import IndexBanner from '../components/indexBanner';
import ListProperties from '../components/listProperties';

const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {
    let dataIndex = useIndex();
    const { name, content, image } = dataIndex;
    return ( 
        <Layout>
                <ImageBackground
                    tag="section"
                    fluid={image.localFile.childImageSharp.fluid}
                    fadeIn="soft"
                >
                    <div className={heroCSS.imagebg}>
                        <h1 className={heroCSS.title}>Sale of exclusive houses and apartments</h1>
                    </div>
                </ImageBackground>
            
            <main>
                <div css={css`
                    max-width: 800px;
                    margin: 0 auto;
                `}>
                    <h1>{name}</h1>
                    <p css={css`
                        text-align: center;
                    `}>{content}</p>
                </div>
            </main>

            <IndexBanner />

            <ListProperties />
        </Layout>
    );
}
 
export default Index;
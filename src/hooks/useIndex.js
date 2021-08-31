import { graphql, useStaticQuery } from "gatsby";

const useIndex = () => {
    
    const response = useStaticQuery(graphql`
        query {
            allStrapiPages( filter: { name: { eq: "Home" }}) {
                nodes {
                    id
                    name
                    content
                    image {
                        localFile {
                          childImageSharp {
                            fluid( maxWidth: 1920 duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            }) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                          }
                        }
                    }
                }
            }
        }
    `);
    return response.allStrapiPages.nodes[0];
}
 
export default useIndex;
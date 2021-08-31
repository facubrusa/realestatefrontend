import { useStaticQuery, graphql } from 'gatsby';

const useProperties = () => {

    const data = useStaticQuery(graphql`
        query {
            allStrapiProperties {
                nodes {
                    id
                    name
                    description
                    bathrooms
                    price
                    parking
                    bedrooms
                    categories {
                        name
                    }
                    agents {
                                name
                        phone_number
                        email
                    }
                    image {
                        localFile {
                          childImageSharp {
                            gatsbyImageData(
                              width: 400
                              placeholder: BLURRED
                              formats: [AUTO, WEBP, AVIF]
                            )
                          }
                        }
                    }
                }
            }
        }
    `);
    
    // console.log(data);
    return data.allStrapiProperties.nodes.map(property => ({
        id: property.id,
        name: property.name,
        description: property.description,
        image: property.image,
        bathrooms: property.bathrooms,
        price: property.price,
        parking: property.parking,
        bedrooms: property.bedrooms,
        categories: property.categories,
        agents: property.agents,
    }));
}
 
export default useProperties;
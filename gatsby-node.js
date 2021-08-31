const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      {
        allStrapiProperties {
          nodes {
            id
            name
          }
        }
        allStrapiPages {
          nodes {
            id
            name
          }
        }
      }
    `);

    // console.log(JSON.stringify(result.data.allStrapiProperties));

    // If there isn't result
    if(result.errors) reporter.panic("There isn't result", result.errors);
    

    // Generate static files
    const properties = result.data.allStrapiProperties.nodes;
    const pages = result.data.allStrapiPages.nodes;

    // Create the templates of the properties
    properties.forEach(property => {
        actions.createPage({
            path: urlSlug(property.name),
            component: require.resolve('./src/components/property.js'),
            context: {
                id: property.id
            }
        });
    });

    pages.forEach(page => {
      actions.createPage({
          path: urlSlug(page.name),
          component: require.resolve('./src/components/pages.js'),
          context: {
              id: page.id
          }
      });
  });
}
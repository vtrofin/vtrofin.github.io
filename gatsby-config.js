const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env.${activeEnv}` });
console.log(`Using environment config: '${activeEnv}'`);

module.exports = {
  pathPrefix: '/vtrofin.github.io',
  siteMetadata: {
    title: `Gatsby Default Starter`,
    phone: process.env.PHONE,
    email: process.env.EMAIL,
    mainSite: process.env.MAIN_SITE,
  },
  plugins: [`gatsby-plugin-react-helmet`],
};

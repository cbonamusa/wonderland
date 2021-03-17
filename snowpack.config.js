// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    "src": "/dist",
    "public": "/"
  },
  plugins: [
    /* ... */
    [
      'snowpack-sass-compiler',
      {
        useAlias:true,
        aliasPrefix:"@", //could work without this
        compilerOptions: { outputStyle: 'compressed',includePaths: ['node_modules/bootstrap/dist/css'] },
      },
    ],  
  ],
  alias: {
    '@myStyles': './path/to/styles',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};

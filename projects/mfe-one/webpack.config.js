const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-one',

  exposes: {
    './Component': './projects/mfe-one/src/app/app.component.ts',
    './InputOutputModule': './projects/mfe-one/src/app/input-output/input-output.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

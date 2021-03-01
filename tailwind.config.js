module.exports = {
  purge: ['./pages/**/*.js', './styles/**/*.css', './components/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayerByDefault: true,
  },
};

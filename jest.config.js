module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '.*\\.(js)$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  restoreMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/utils/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/src/utils/assetsTransformer.js'
  }
}

import light from './light'

const dark: typeof light = {
  ...light,
  colors: {
    ...light.colors,
    background: '#000'
  }
}

export default dark

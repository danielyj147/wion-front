import 'styled-components'
import { ColorsTypes } from './Themes'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
  }
}
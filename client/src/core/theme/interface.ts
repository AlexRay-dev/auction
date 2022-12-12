import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      font: string,
      red: string,
      blue: string,
      green: string,
      timerBg: string,
      timerBorder: string,
    }
  }
}
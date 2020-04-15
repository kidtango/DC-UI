// import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    failure?: PaletteColorOptions;
    iconActive?: string;
    text?: {
      light: string;
    };
  }

  interface Palette {
    failure: PaletteColor;
    iconActive: string;
    light: string;
  }
}

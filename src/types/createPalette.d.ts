import * as createPalette from '@material-ui/core/styles/createPalette';

// Extending the theme palete for custom color types
declare module '@material-ui/core/styles/createPalette' {
  interface IconPaletteColorOptions {
    standards?: string;
    risk?: string;
    RTM?: string;
    rigAllocation?: string;
    wells?: string;
    sideBarIcon?: string;
    active?: string;
    inActive?: string;
    error?: string;
  }

  interface IconPaletteColor {
    standards: string;
    risk: string;
    RTM: string;
    rigAllocation: string;
    wells: string;
    sideBarIcon: string;
    active: string;
    inActive: string;
    error: string;
  }

  interface PaletteOptions {
    icon?: IconPaletteColorOptions;
  }

  interface Palette {
    icon: IconPaletteColor;
  }
}

import tinycolor from "tinycolor2";

const primary = "#00acc1";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 15;

const darkBgText = '#fff'
const lightBgText = '#333'

const baseConfig = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(info)
        .darken(darkenRate)
        .toHexString(),
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
      hint: "#B9B9B9",
    },
    background: {
      default: "#9013FE",
      light: "#9013FE",
    },
    action: {

    }
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  overrides: {
    MuiListItem: {
      divider: {
        borderBottom: `1px solid rgba(255, 255, 255, 0.32)`
      }
    },
    MuiToolbar: {
      root: {
        overflow: 'hidden',
        background: 'rgba(0,0,0,0.8)'
      },
      icon: {
        color: darkBgText
      }
    },
    MuiBadge: {
      root: {
        color: darkBgText
      }
    },
    MuiSvgIcon: {
      root: {
        color: darkBgText
      }
    },
    MuiButton: {
      root: {
        width: '100%',
        display: 'flex',
      },
      text: {
        // '&:hover': {
        //   background: tinycolor(primary).lighten(lightenRate).toHexString(),
        //   color: darkBgText,
        // },
        padding: '16px',
        '&.active': {
          transition: `.3s background ease`,
          background: primary,
          color: darkBgText
        }
      }
    },
    MuiContainer: {
      root: {
        maxWidth: '100%',
        background: 'blue',
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        paddingLeft: 256,
        // [theme.breakpoints.up('lg')]: {
        //   paddingLeft: 256
        // }
      }
    }
  },
}

const lightThemeConfig = {
  palette: {
    type: 'light',
  },
}

const darkThemeConfig = {
  palette: {
    type: 'dark',
    primary: {
      main: '#00acc1'
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
      hint: "#B9B9B9",
    }
  },
  overrides: {
    MuiListItem: {
      root: {
        '&.hover': {
          background: '#00acc1',
          color: '#fff'
        }
      }
    }
  },
}

export {
  darkThemeConfig,
  lightThemeConfig,
  baseConfig
}
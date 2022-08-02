export const theme = {
    colors: {
      white: '#fff',
      text: '#2a2a2a',
      background: '#FBE7C6',
      primary: '#A0E7E5',
      secondary: '#B4F8C8',
      accent: '#609',
      muted: '#f6f6f6',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'system-ui, sans-serif',
      monospace: 'Menlo, monospace',
    },
    fontSizes: {
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '32px',
      xl: '64px',
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    borders: {
      none: 'none',
      normal: '1px solid',
    },
    radii: {
      none: '0',
      normal: '4px',
      extra: '8px',
      round: '50%',
    },
    shadows:{
      box1:'0 15px 35px rgba(0,0,0,0.30)',
      box2:'3px 0px 5px rgb(0 0 0 / 50%)',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
     // variants for buttons
  buttons: {
    primary: {
      // you can reference other values defined in the theme
      color: 'white',
      bg: 'primary',
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
  }
  };
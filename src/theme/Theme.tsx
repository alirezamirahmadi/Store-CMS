import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { useCookies } from "react-cookie";
import createCache from '@emotion/cache';

// import sahel from '../Fonts/Sahel-FD.woff2';
import App from '../App';

const cacheDataTable = createCache({
  key: "mui-datatables",
  prepend: true
});

export default function Theme() {
  // const [cookies, setCookie, removeCookie] = useCookies(['dark-mode']);
  const [mode, ] = useState<'light' | 'dark'>('light');
  // const colorMode = useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       // console.log(mode);
  //       setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  //       // setMode('dark');
  //     },
  //   }),
  //   [],
  // );

  // const setTheme = () => {

  // }

  // useEffect(() => {
  //   console.log(mode);

  // }, [mode])

  let theme = createTheme({});
  theme = useMemo(() =>

    createTheme({

      palette: {
        mode,

        primary: {
          main: '#00A693', 
          light: '#57C5C6',
          contrastText: '#fff',
        },
        
        secondary:{
          main:'#D99058',
          contrastText: '#fff',
        }
      },
      typography: {
        fontFamily: ['sahel, arial'].join(","),
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'sahel';
              src: url() format('woff2');
            }
          `,
        },
      },
    }),
    [mode]
  )

  return (
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <App />
      </ThemeProvider>
  )
}

export { cacheDataTable };
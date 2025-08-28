'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'light',
    },
    // typography: {
    //     fontFamily: poppins.style.fontFamily,
    // },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { severity: 'info' },
                            style: {
                                backgroundColor: '#0e7bffff',
                            },
                        }
                    ],
                },
            },
        },
    },
});

export default theme;
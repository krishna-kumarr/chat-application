'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'light',
        layoutHeading: {
            main: '#c33030ff',
            gradient: 'linear-gradient(to right, #23abe5ff, #29a5f7ff)',
        },
        primary: {
            light: '#3bd0ebff',
            main: '#23abe5ff',
            dark: '#29a5f7ff',
            contrastText: '#ff1515ff',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700 },
        h2: { fontSize: '2rem', fontWeight: 600 },
        body1: { fontSize: '1rem' },
        button: { textTransform: 'none' },
    },
    shape: {
        borderRadius: 6,
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'auth_basic_heading' },
                    style: {
                        display: 'block',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        background: 'linear-gradient(to right, #787879ff, #898b8dff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    },
                },
            ],
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'sign_in_button' },
                    style: {
                        fontSize: '.9rem',
                        fontWeight: 600,
                        color: 'white',
                        background: 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))'

                    },
                },
                {
                    props: { variant: 'sign_up_button' },
                    style: {
                        fontSize: '.9rem',
                        fontWeight: 600,
                        color: 'white',
                        background: 'linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))'
                    },
                },
            ],
        },
        // MuiAlert: {
        //     styleOverrides: {
        //         root: {
        //             variants: [
        //                 {
        //                     props: { severity: 'info' },
        //                     style: {
        //                         backgroundColor: '#376dafff',
        //                         transition: 'all 0.3s ease-in-out',
        //                         scrollBehavior: 'smooth'
        //                     },
        //                 }
        //             ],
        //         },
        //     },
        // },

        // MuiSelect: {
        //     styleOverrides: {
        //         root: {
        //             borderRadius: 12,
        //             '&:hover': {
        //                 backgroundColor: '#f5f5f5',
        //             },
        //         },
        //     },
        // },
        // MuiInput: {
        //     styleOverrides: {
        //         root: {
        //             borderRadius: 12,
        //             '&:hover': {
        //                 backgroundColor: '#f5f5f5',
        //             },
        //         },
        //     },
        // },
        // MuiTextField: {
        //     styleOverrides: {
        //         root: {
        //             borderRadius: 15,
        //             '&:hover': {
        //                 backgroundColor: '#f5f5f5',
        //             },
        //         },
        //     },
        // },
    },
});

export default theme;
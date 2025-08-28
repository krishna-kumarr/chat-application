import { Box, Grid } from "@mui/material";

export function AuthLayout({ children }) {
    return (
        <Grid container sx={{
            height: '100vh', justifyContent: 'start',
            backgroundImage: {
                md: 'url(https://assets.mongodb-cdn.com/mms/static/images/auth/login_desktop.svg)'
            },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} >
            <Grid direction="column" sx={{ md: 4, padding: 2, height: '100%', backgroundColor: '#ffffff' }}>
                <Box sx={{ height: '30%' }}>
                    <img src="https://admin.adraproductstudio.com/static/media/company_logo.acc47529927dd2bb1b46.png" alt="Logo" width={80} />
                </Box>
                <Box>
                    {children}
                </Box>
            </Grid>
        </ Grid>
    );
}

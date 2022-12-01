import { Box } from "@mui/material";
import MainNavbar from "../components/MainNavbar";

const MainLayout = ({children}) => {
    return ( 
        <Box>
            <header>
                <MainNavbar/>
            </header>
            <Box sx={{
                mx: 5,
                mt: 2,
            }}>
                {children}
            </Box>
        </Box>
     );
}
 
export default MainLayout;
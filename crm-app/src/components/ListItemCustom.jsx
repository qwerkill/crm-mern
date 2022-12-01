import { ListItem, styled } from "@mui/material";

const NavItem = styled(ListItem)(({ theme }) => ({
    maxWidth : '200px',
    "& a":{
        textDecoration: 'none',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        "& :hover":{
            color: theme.palette.primary.dark,
        },
    }
}));
 
export default function ListItemCustom({children}) {
    return (
    <NavItem>
        {children}
    </NavItem>
    );
};
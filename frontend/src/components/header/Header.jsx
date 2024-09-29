import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container';
import { Toolbar, Typography, Box, IconButton, Avatar } from '@mui/material';
// import AdbIcon from '@mui/icons-material/Adb'
import CloudCircleIcon from '@mui/icons-material/CloudCircle'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from '../search/Search';

const Header = () => {

    //const settings = ["Profile, Account, Dashboard, Logout"];
    const [searchVal, setSearchVal] = React.useState("");

    const handleSearchChange = (event) => {
        setSearchVal(event.target.value);
    };

    return (
        <AppBar sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*Logo that I'm working with*/}
                    <CloudCircleIcon sx = {{ display: { xs: 'none', md: 'flex'}, mr: 1}} />

                    {/*Words */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx = {{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PHOTO DRIVE
                    </Typography>
                    
                    <Box sx = {{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/*Search Bar*/}
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search for Files"
                                inputProps= {{ 'aria-label': 'search'}}
                                onChange={handleSearchChange}
                            />
                        </Search>

                        <Box sx = {{ flexGrow: 0 }}>
                            <IconButton>
                                <Avatar alt= "Place Holder" src= "/drivelogo512.png" />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
     )

}

export default Header;
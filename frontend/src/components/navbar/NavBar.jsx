import * as React from 'react';

import { Drawer, Toolbar, Box, Button, Divider, List,  ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavBar = () => {

    const drawerWidth = "15%";
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant = "permanent"
                sx = {{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}>
            <Toolbar />
            <Box sx= {{
                    overflow: 'auto',
                }}>
                <Box sx = {{
                    display: 'flex',
                    marginTop: '40%',
                    marginBottom: '30%',
                }}>
                    <Button sx = {{
                        color: "#FFFFFF",
                        margin: 'auto',
                        backgroundColor: theme.palette.secondary.main,
                        }}>
                        UPLOAD
                    </Button>
                </Box>

                <Divider />

                <List>
                    {["Home", "Recent", "Important", "Starred", "Trash"].map((text, index) => (
                        <ListItem key= {text} disablePadding sx = {{
                            marginTop: '2.5%',
                            marginBottom: '2.5%',
                            paddingLeft: '2.5%',
                            paddingRight: '2.5%',
                        }}>
                            <ListItemButton sx = {{
                                borderRadius: '5px',
                                backgroundColor: theme.palette.primary.main,
                            }}>
                                {/**TODO ADD appropriate Logos beside button */}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider />

                {/**TODO Add Storage Reading */}
            </Box>
        </Drawer>
       </Box>
     )

}

export default NavBar;
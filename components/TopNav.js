import PropTypes from 'prop-types';
import { AppBar, Typography, Toolbar, Button, Box, useScrollTrigger, Slide } from "@mui/material"
import Link from 'next/link'

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

HideOnScroll.propTypes = {
children: PropTypes.element.isRequired,
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
window: PropTypes.func,
};

export default function TopNav(props){

    return(
        <AppBar position='static' elevation={0} style={{marginBottom: 24}} color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/"><a>Home</a></Link>
                </Typography>
                <Link href="/cart"><a>
                  <Button color="inherit">
                      Cart
                  </Button>
                </a></Link>
            </Toolbar>
        </AppBar>
    )
}
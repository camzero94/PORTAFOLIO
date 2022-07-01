import { Grid, AppBar,Button, Toolbar, Typography } from '@mui/material'
import ApiIcon from '@mui/icons-material/Api'
const LayoutHeader = ({ children }) => {
  // const colorAppBar ={
  //   button-4 {
  //     appearance: none;
  //     background-color: #FAFBFC;
  //     border: 1px solid rgba(27, 31, 35, 0.15);
  //     border-radius: 6px;
  //     box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  //     box-sizing: border-box;
  //     color: #24292E;
  //     cursor: pointer;
  //     display: inline-block;
  //     font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  //     font-size: 14px;
  //     font-weight: 500;
  //     line-height: 20px;
  //     list-style: none;
  //     padding: 6px 16px;
  //     position: relative;
  //     transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  //     user-select: none;
  //     -webkit-user-select: none;
  //     touch-action: manipulation;
  //     vertical-align: middle;
  //     white-space: nowrap;
  //     word-wrap: break-word;
  //   }
  //
  //   button-4:hover {
  //     background-color: #F3F4F6;
  //     text-decoration: none;
  //     transition-duration: 0.1s;
  //   }
  //
  //   button-4:disabled {
  //     background-color: #FAFBFC;
  //     border-color: rgba(27, 31, 35, 0.15);
  //     color: #959DA5;
  //     cursor: default;
  //   }
  //
  //   button-4:active {
  //    background-color: #EDEFF2;
  //     box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  //     transition: none 0s;
  //   }
  //
  //   button-4:focus {
  //     outline: 1px transparent;
  //   }
  //
  //   button-4:before {
  //     display: none;
  //   }
  //
  //   button-4:-webkit-details-marker {
  //     display: none;
  //   }
  // }
  const pages = ["HELLO","RESUME", "PORTAFOLIO","TESTIMONIALS","BLOG","CONTACTS"]
  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#FAFBFC" }}>
        <Grid container sx={{ mr: 5, ml: 5 }} maxWidth="xl" direction="column">
          <Toolbar disableGutters>
            <Grid item>
              <ApiIcon sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: "#555", mr: 1 }} />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 1,
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: '700',
                  letterSpacing: '.3rem',
                  color: '#555',
                  textDecoration: 'none',
                }}
              >
                Logo
              </Typography>
            </Grid>
            <Grid container direction="row">
              <Grid item>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    ml: 1,
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: '700',
                    letterSpacing: '.3rem',
                    color: '#555',
                    textDecoration: 'none',
                  }}
                >
                  {pages.map((page)=>(
                    <Button>
                      {page}
                      </Button>
                  ))} 
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </Grid >
      </AppBar>
      <Grid container >
        {children}
      </Grid>
    </div>
  );
}

export default LayoutHeader;

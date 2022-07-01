import { Card, Grid } from '@mui/material'
import LayoutHeader from '../components/Layout'

function Home() {
  return (
    <>
      <LayoutHeader>
        <Grid container direction="Column" >
          <Grid item >
            <Card style={{ height: 300, width: 300 }}>
              This Is the Portafolio
            </Card>
          </Grid>
          <Grid item >
            <Card style={{ height: 300, width: 300 }}>
              This Is the Portafolio
            </Card>
          </Grid>
          <Grid item >
            <Card style={{ height: 300, width: 300 }}>
              This Is the Portafolio
            </Card>
          </Grid>
          <Grid item >
            <Card style={{ height: 300, width: 300 }}>
              This Is the Portafolio
            </Card>
          </Grid>
        </Grid>
      </LayoutHeader>
    </>
  );
}

export default Home;

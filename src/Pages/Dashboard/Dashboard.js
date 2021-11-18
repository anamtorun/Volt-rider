import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import MakeAnAdmin from '../MakeAnAdmin.js/MakeAnAdmin';
import AddAProduct from '../AddAProduct/AddAProduct';
import GiveReview from '../GiveReview/GiveReview';
import ManageProducts from '../ManageProducts.js/ManageProducts';
import Payment from '../Payment/Payment';


const drawerWidth = 240;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        
          <ListItem>
            <Link style={{textDecoration: 'none'}} to={`${url}`}><h6>My Orders</h6></Link>
          </ListItem>
          <ListItem>
          <Link  style={{textDecoration: 'none'}} to={`${url}/makeadmin`}><h6>Make Admin</h6></Link>
          </ListItem>
          <ListItem>
          <Link  style={{textDecoration: 'none'}} to={`${url}/addproduct`}><h6>Add Product</h6></Link>
          </ListItem>
          <ListItem>
          <Link  style={{textDecoration: 'none'}} to={`${url}/review`}><h6>Give Review</h6></Link>
          </ListItem>
          <ListItem>
          <Link  style={{textDecoration: 'none'}} to={`${url}/manageproducts`}><h6>Manage Products</h6></Link>
          </ListItem>
          <ListItem>
          <Link  style={{textDecoration: 'none'}} to={`${url}/payment`}><h6>Payment</h6></Link>
          </ListItem>

      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <MyOrders/>
        </Route>
        <Route path={`${path}/makeadmin`}>
         <MakeAnAdmin/>
        </Route>
        <Route path={`${path}/addproduct`}>
         <AddAProduct/>
        </Route>
        <Route path={`${path}/review`}>
         <GiveReview/>
        </Route>
        <Route path={`${path}/manageproducts`}>
         <ManageProducts/>
        </Route>
        <Route path={`${path}/payment`}>
         <Payment/>
        </Route>
      </Switch>    
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
















// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div>
//             <h2>This is Dashboard</h2>
//         </div>
//     );
// };

// export default Dashboard;
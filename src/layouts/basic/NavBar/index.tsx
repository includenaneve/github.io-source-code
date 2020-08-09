import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NAVCONFIG, USERINFO } from '@/constants/layout'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';

import NavItem from './NavItem';
import { default as avatar } from '@/assest/img/avatar.png'
import { default as sideBarNav } from '@/assest/img/sideNavBg.png'
require('@/layouts/basic/live2d/autoload.js')

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const useStyles = makeStyles((theme) => ({
  '@global': {
    '#waifu': {
      zIndex: 99999
    }
  },
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  navBg: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'block',
    zIndex: 1,
    position: 'absolute',
  },
  navContent: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'block',
    zIndex: 1,
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.7)'
  }
}));

const NavBar = ({ onMobileClose, openMobile, changeTheme }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {

  }, [])

  const content = (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      <Box height="100%" display="flex" flexDirection="column" className={classes.navContent} >
        <Box alignItems="center" display="flex" flexDirection="column" p={2}>
          <Avatar className={classes.avatar} src={USERINFO.avatar} onClick={changeTheme} />
          <Typography className={classes.name} color="textPrimary" variant="h5" >
            {USERINFO.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {USERINFO.info}
          </Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <List>
            {
              NAVCONFIG.map((item) => (
                <NavItem
                  href={item.href}
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  divider={item.divider}
                />
              ))
            }
          </List>
        </Box>
      </Box>
      <img src={sideBarNav}/>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;

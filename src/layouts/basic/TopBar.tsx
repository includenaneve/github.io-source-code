import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { default as Logo } from '@/assest/img/logo.png';
import topBarBg from '@/assest/img/topBarBg.png'
import { Slide, useScrollTrigger } from '@material-ui/core';
import { connectMe } from '@/constants/layout'

const useStyles = makeStyles(() => ({
  avatar: {
    width: 60,
    height: 60
  },
  logo: {
    height: 60
  },
  topBarBg: {
    backgroundImage: `url(${topBarBg})`
  }
}));


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}
// 没反应
function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopBar = ({
  className,
  onMobileNavOpen,
  changeTheme,
  ...rest
}) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <HideOnScroll >
      <AppBar
        className={classes.topBarBg}
        elevation={0}
        {...rest}
      >
        <Toolbar>
          <img src={Logo} alt="logo" className={classes.logo} onClick={changeTheme}/>
          <Box flexGrow={1} />
          <Hidden mdDown>
            <IconButton>
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <InputIcon />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton
              onClick={onMobileNavOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;

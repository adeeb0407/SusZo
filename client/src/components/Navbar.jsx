import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Button, Form } from "antd";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import female1 from "../images/female1.png";
import female2 from "../images/female2.png";
import female3 from "../images/female3.png";
import female4 from "../images/female4.png";
import male1 from "../images/male1.png";
import male2 from "../images/male2.png";
import male3 from "../images/male3.png";
import male4 from "../images/male4.png";
import other from "../images/other.png";
import SideNavbar from './SideNavbar'
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import suszoLogo from "../images/suszo_logo.png";
import {
  getAllUserByPrefix,
  searchUser,
  fetchUsersById,
} from "../actions/getUsers";
import {
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
  MailOutlined,
  BellOutlined,
  MoreOutlined,
  FileSearchOutlined,
  CompassOutlined,
} from "@ant-design/icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const avatar = useSelector((state) => state.userById.avatar);

  console.log(avatar);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [searchData, setSearchData] = useState("");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [search, setsearch] = useState('')

  const users = useSelector((state) => state.users);
  const usersData = useSelector((state) => state.usersData);

  console.log(users);

  const handelSearchInput = (e) => {
    const { name, value } = e.target;
    setsearch(value)
     dispatch(getAllUserByPrefix(value));
     navigate('/user')
  };

  const handelSearch = (e) => {
    dispatch(getAllUserByPrefix(search));
    navigate('/user')
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const Navref = useRef("");
  const [navShow, setNavShow] = useState(true);
  
  const navShowToggle = () => {
    const nav = document.querySelector(".navShow");
    setNavShow(!navShow);
    if (navShow) {
      nav.classList.add("nav_show_button");
      nav.classList.remove("nav_remove_button");
    } else {
      nav.classList.remove("nav_show_button");
      nav.classList.add("nav_remove_button");
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    setUser(null);

  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user !== null ? (
        <Link to="/profile">
          <MenuItem onClick={handleMenuClose}> Profile</MenuItem>
        </Link>
      ) : (
        <Link to="/login">
          <MenuItem onClick={handleMenuClose}> Login</MenuItem>
        </Link>
      )}
      {user !== null && (
        <MenuItem onClick={handleMenuClose} onClick={logout}>
          Logout
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user !== null && (
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailOutlined />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
      )}
      {user !== null && (
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <BellOutlined />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
      )}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <UserOutlined />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            ref={Navref}
            onClick={navShowToggle}
          >
            <MenuOutlined />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              src={suszoLogo}
              height="50px"
              width="50px"
              style={{ padding: "5px" }}
            />
            <span className="logoTitle">SusZo</span>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchOutlined />
            </SearchIconWrapper>
            <StyledInputBase
              name="username"
              placeholder="Username / Intrests"
              inputProps={{ "aria-label": "search" }}
              onChange={handelSearchInput}
            />
          </Search>
          {/* <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handelSearch}
            style = {{padding : '5px'}}
          >
          </Button> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {user !== null && (
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailOutlined />
                </Badge>
              </IconButton>
            )}
            {user !== null && (
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <BellOutlined />
                </Badge>
              </IconButton>
            )}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {(() => {
                if (user !== null) {
                  switch (avatar) {
                    case "male1":
                      return (
                        <Avatar alt={user.response.fullname} src={male1} />
                      );
                    case "male2":
                      return (
                        <Avatar alt={user.response.fullname} src={male2} />
                      );
                    case "male3":
                      return (
                        <Avatar alt={user.response.fullname} src={male3} />
                      );
                    case "male4":
                      return (
                        <Avatar alt={user.response.fullname} src={male4} />
                      );
                    case "female1":
                      return (
                        <Avatar alt={user.response.fullname} src={female1} />
                      );
                    case "female2":
                      return (
                        <Avatar alt={user.response.fullname} src={female2} />
                      );
                    case "female3":
                      return (
                        <Avatar alt={user.response.fullname} src={female3} />
                      );
                    case "female4":
                      return (
                        <Avatar alt={user.response.fullname} src={female4} />
                      );
                    default:
                      return <UserOutlined />;
                  }
                } else return <UserOutlined />;
              })()}
              {/* {user !== null ?<Avatar alt={user.response.fullname} src={user.response.avatar === 'female4' ? female4 : male1} />
            : <UserOutlined />} */}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
   <SideNavbar navShowToggle = {navShowToggle}/>
    </>
  );
}

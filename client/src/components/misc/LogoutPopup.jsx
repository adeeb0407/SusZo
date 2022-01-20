import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { message} from 'antd';
import { useDispatch } from 'react-redux';
import {Link, useNavigate, useLocation} from 'react-router-dom'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    setUser(null);
  };

  const handleClickOpen = () => {
    message.success('User Sucessfully Logged Out');
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    setOpen(true);
    logout()
    message.success('User Sucessfully Logged Out');
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you Sure you want ot Logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleLogout} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

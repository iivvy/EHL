// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const options = [
//   'Ajouter etudiant automatiquement',
//   'Ajouter etudiant manuellement',
 
// ];

// const ITEM_HEIGHT = 50;

// export default function LongMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton
//       style={{marginLeft:"600px"}}
//         aria-label="more"
//         id="long-button"
//         aria-controls={open ? 'long-menu' : undefined}
//         aria-expanded={open ? 'true' : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MoreVertIcon />
//       </IconButton>
//       <Menu
//         id="long-menu"
//         MenuListProps={{
//           'aria-labelledby': 'long-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: '40ch',
           
//           },
//         }}
//       >
//         {options.map((option) => (
//           <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }





import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MenuPopupState() {
  const redirect = () => {
    var url = "/temps";
    window.open(url);
  };
  const redirect2 = () => {
    var url = "/form";
    window.open(url);
  };
  const redirect3 = () => {
    var url = "/formetudiant";
    window.open(url);
  };
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          {/* <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button> */}
          <IconButton
          style={{marginLeft:"620px"}}
            aria-label="upload picture"
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={redirect}>Ajouter Enseignant manuellement</MenuItem>
            <MenuItem onClick={redirect2}>Ajouter etudiant automatiquement</MenuItem>
            <MenuItem onClick={redirect3}>Ajouter etudiant manuellement</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
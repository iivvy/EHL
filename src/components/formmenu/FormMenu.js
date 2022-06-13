
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MenuPopupState() {
  const redirect = () => {
    var url = "/admin/TeacherDB/newMan";
    window.open(url);
  };
  const redirect2 = () => {
    var url = "/admin/StudentDB/newAuto";
    window.open(url);
  };
  const redirect3 = () => {
    var url = "/admin/StudentDB/newMan";
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
          style={{marginLeft:"530px"}}
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
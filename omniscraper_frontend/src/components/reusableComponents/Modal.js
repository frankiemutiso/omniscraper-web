import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "./Button";
import Spinner from "./Spinner";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' color='primary' />;

function Modal(props) {
  const {
    title,
    type,
    open,
    videoTags,
    handleRightButtonClick,
    handleClose,
    handleChange,
    isSpinning,
    fullScreen,
    fullWidth,
    description,
    tagName,
    checkedTags,
  } = props;

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth='sm'
        open={open}
      >
        <DialogTitle>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.05px",
                fontSize: 14,
              }}
            >
              {title}
            </p>
            <Button type='icon' onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
        </DialogTitle>
        <Divider />

        <DialogContent>
          {type === "report" ? (
            <p>Are you sure you want to report this video?</p>
          ) : type === "editVideo" ? (
            <Autocomplete
              fullWidth={true}
              open={open}
              multiple
              onChange={handleChange}
              options={videoTags}
              disableCloseOnSelect
              filterSelectedOptions={true}
              getOptionLabel={(option) => option.tag_name}
              defaultValue={checkedTags}
              renderOption={(props, option, { selected }) => (
                <li key={option.id} {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    color='primary'
                  />
                  {option.tag_name}
                </li>
              )}
              style={{ width: "100%", height: "52vh" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant='outlined'
                  label='Tags'
                  style={{ marginTop: 8 }}
                />
              )}
            />
          ) : (
            <>
              <TextField
                required
                variant='outlined'
                margin='normal'
                fullWidth
                label='Tag name'
                name='tagName'
                onChange={handleChange}
                value={tagName}
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                label='Description (optional)'
                multiline={true}
                minRows={2}
                name='description'
                onChange={handleChange}
                value={description}
              />
            </>
          )}
        </DialogContent>
        <DialogActions style={{ padding: 16 }}>
          <Button onClick={handleClose} type='outlined'>
            Cancel
          </Button>
          <Button
            onClick={handleRightButtonClick}
            endIcon={isSpinning ? <Spinner size={12} color='white' /> : ""}
          >
            {type === "Report" ? "" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;

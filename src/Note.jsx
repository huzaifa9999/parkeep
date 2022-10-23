import React from "react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import "./App.css";
var current = new Date();
const Note = (props) => {
  const [checked, setChecked] = React.useState(true);
  const [activeItemsCount, setActiveItemsCount] = React.useState(0);
  const handleChange = (event) => {
    setChecked(false);

  };

  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right"> Number</TableCell>
              <TableCell align="right">Checkin</TableCell>
              <TableCell align="right">checkout</TableCell>
              <TableCell align="right">Present</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={props.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="td" scope="row">
                {props.title}
              </TableCell>
              <TableCell align="right">{props.number}</TableCell>
              <TableCell align="right">
                {current.toLocaleTimeString()}
              </TableCell>
              <TableCell align="right">
                {checked ? null : current.toLocaleTimeString()}
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  state={checked? 'checked': 'unchecked'}
                  // inputProps={{ "aria-label": "controlled" }}
                />
              </TableCell>
              <TableCell align="right">
                <Button onClick={deleteNote}>
                  <DeleteOutlineIcon className="deleteIcon" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Note;

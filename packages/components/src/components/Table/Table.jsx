import React from "react";
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PropTypes from "prop-types";

function Table({ columns, data, ...props }) {
  return (
    <TableContainer component={Paper}>
      <MUITable {...props}>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col, idx) => (
                <TableCell key={idx}>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}

export default Table;

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

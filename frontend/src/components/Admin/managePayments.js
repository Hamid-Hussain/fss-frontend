import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllInvoices } from "../../store/slices/managePayments-slice";
import PaymentProof from "./paymentProof";
import Chip from "@mui/material/Chip";

import Button from "@mui/material/Button";

const columns = [
  { id: "user_id", label: "User Id", minWidth: 170 },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
    align: "center",
    format: (value) => "$" + value,
  },
  {
    id: "payment_proof",
    label: "Payment Proof",
    minWidth: 170,
    align: "center",
    showProof: (value) => {
      console.log("jflsd", value);
      return <PaymentProof invoice={value} />;
    },
  },
  {
    id: "payment_status",
    label: "Payment Status",
    minWidth: 170,
    align: "center",
  },
  //   {
  //     id: "density",
  //     label: "Density",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toFixed(2),
  //   },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { invoices } = useSelector((state) => state.managePayment);

  console.log(invoices);

  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getColor = (value) => {
    console.log(value);
    return value == "Approved"
      ? "success"
      : value == "Rejected"
      ? "error"
      : "warning";
  };

  useEffect(() => {
    dispatch(getAllInvoices());
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((invoice, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = invoice[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.showProof ? (
                            column.showProof(invoice)
                          ) : column.label == "Payment Status" ? (
                            // <Button
                            //   variant="outlined"
                            //   size="small"
                            //   color={getColor(value)}
                            // >
                            //   {value}
                            // </Button>

                            <Chip label={value} color={getColor(value)} />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={invoices.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

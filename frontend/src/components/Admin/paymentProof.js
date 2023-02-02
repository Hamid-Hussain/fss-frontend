import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/receipt-2.jpeg";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useDispatch } from "react-redux";
import { updatePaymentStatus } from "../../store/slices/managePayments-slice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("handlecose");
    setOpen(false);
  };

  console.log(props);

  const getColor = (value) => {
    console.log(value);
    return value == "Approved"
      ? "success"
      : value == "Rejected"
      ? "error"
      : "warning";
  };

  //   React.useEffect(() => {
  const updateStatus = (status) => {
    console.log(status);
    const paymentStatus = {
      invoice_id: props.invoice.id,
      payment_status: status,
    };
    dispatch(updatePaymentStatus(paymentStatus));
  };
  //   }, [dispatch]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Show Proof
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Payment Proof
        </BootstrapDialogTitle>
        <DialogContent sx={{ px: "auto" }}>
          <img
            src={img}
            alt="Payment Proof"
            style={{ width: "400px", height: "400px" }}
          ></img>
          <Box sx={{ mt: "10px" }}>
            {/* Current Payment Status: {"  "} */}
            {/* <Chip
              label={props.invoice.payment_status}
              color={getColor(props.invoice.payment_status)}
            /> */}
            {/* <Button
              autoFocus
              variant="contained"
              size="small"
              color="error"
              disableElevation
              color={getColor(props.invoice.payment_status)}
            >
              {props.invoice.payment_status}
            </Button> */}
            <Alert severity={getColor(props.invoice.payment_status)}>
              <AlertTitle>{props.invoice.payment_status}</AlertTitle>
              Payment Status is —{" "}
              <strong>{props.invoice.payment_status}!</strong>
            </Alert>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            size="small"
            color="error"
            disableElevation
            onClick={() => updateStatus("Rejected")}
          >
            Reject
          </Button>

          <Button
            autoFocus
            onClick={handleClose}
            size="small"
            color="success"
            variant="contained"
            disableElevation
            onClick={() => updateStatus("Approved")}
          >
            Approve
          </Button>

          {/* <Chip
            label="Reject"
            disabled={props.invoice.payment_status !== "Pending"}
            color="error"
          />
          <Chip
            label="Approve"
            disabled={props.invoice.payment_status !== "Pending"}
            color="success"
          /> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

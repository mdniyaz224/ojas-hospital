import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React, { forwardRef, memo } from 'react';

type TDialogProps = {
  open: boolean;
  handleClose?: () => void;
  onConfirm?: () => void;
  className?: string;
  children?: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  dialogTitle?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  fullWidth?: boolean;
};
const Modal = forwardRef((props: TDialogProps, ref: any) => {
  const {
    open,
    handleClose,
    className,
    children,
    onConfirm,
    confirmLabel,
    cancelLabel,
    dialogTitle,
    maxWidth = 'sm',
    fullWidth = false,
  } = props;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      className={className}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogTitle
        sx={{ m: 0, p: 2 }}
        id="customized-dialog-title"
      >
        {dialogTitle}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        ref={ref}
      >
        {children}
      </DialogContent>
      {(confirmLabel || cancelLabel) && (
        <DialogActions>
          {confirmLabel && (
            <Button
              variant="contained"
              autoFocus
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          )}
          {cancelLabel && (
            <Button
              autoFocus
              variant="outlined"
              onClick={handleClose}
            >
              {cancelLabel}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
});

export default memo(Modal);
Modal.displayName = 'CustomModal';

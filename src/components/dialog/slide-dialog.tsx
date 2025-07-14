import type { TransitionProps } from '@mui/material/transitions';

import * as React from 'react';

import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import { IconButton } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Close as CloseIcon } from '@mui/icons-material';
import DialogContentText from '@mui/material/DialogContentText';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

type DialogProps = {
  id: string;
  title?: React.ReactElement<any, any> | string;
  actions?: React.ReactElement<any, any>;
  children: React.ReactElement<any, any>;
  textContent?: React.ReactElement<any, any>;
  open: boolean;
  setOpen: (arg: boolean) => boolean | void;
  [key: string]: any;
  rest?: any;
};

export default function DialogSlide({
  id,
  title,
  actions,
  textContent,
  children,
  open,
  setOpen,
  ...rest
}: Readonly<DialogProps>) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      id={id}
      open={open}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      {...rest}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        {textContent && (
          <DialogContentText id={id + 'textContent'}>{textContent}</DialogContentText>
        )}
        {children}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}

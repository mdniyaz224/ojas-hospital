import type { FC } from 'react';
import toast, { Toaster as HotToaster, ToastBar } from 'react-hot-toast';
import { alpha } from '@mui/system/colorManipulator';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { ToasterDuration } from 'src/types/common';

interface IToast {
  duration?: ToasterDuration.Fast | ToasterDuration.Slow | ToasterDuration.Medium;
  reverseOrder?: boolean;
}
export const Toaster: FC = (props: IToast) => {
  const { duration = ToasterDuration.Medium } = props;
  const theme = useTheme();
  return (
    <HotToaster
      position={"top-right"}
      gutter={8}
      reverseOrder={false}
      toastOptions={{
        duration: duration,
        style: {
          backdropFilter: 'blur(6px)',
          background: alpha(theme.palette.neutral[900], 0.8),
          color: theme.palette.common.white,
          boxShadow: theme.shadows[16],
        },
        success: {
          duration: ToasterDuration.Medium,
          style: {
            background: theme.palette.success.main,
            color: theme.palette.text.primary
          },
        },
        error: {
          duration: ToasterDuration.Medium,
          style: {
            background: theme.palette.error.main,
            border: `1px solid ${theme.palette.error.main}`,
          },

        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}
          style={{
            ...t.style,
            opacity: t.visible ? 1 : 0,
            animation: 'custom-enter 1s ease',
          }}>
          {({ icon, message }) => (
            <>
              {t.type == "error" && <ErrorOutlineOutlinedIcon />}
              {message}
              <IconButton aria-label={`cancel-toast-${t.id}`}
                onClick={() => { toast.dismiss(t.id); }} >
                <CloseIcon fontSize='small'
                  sx={{ color: theme.palette.text.primary }} />
              </IconButton>
            </>
          )}
        </ToastBar>
      )}
    </HotToaster>
  );
};

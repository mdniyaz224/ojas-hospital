import { Typography } from '@mui/material';
import { memo } from 'react';

interface ITypography {
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'boldBody1';
  children: string;
  id: string;
  className?: string;
}
const MuiTypography = (props: ITypography) => {
  const { id, variant, children, className } = props;

  return (
    <Typography
      id={id}
      data-testid={id}
      variant={variant}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default memo(MuiTypography);

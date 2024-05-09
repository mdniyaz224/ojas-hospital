import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import React, { memo } from 'react';
import { TSize, TColor, TVariant } from 'src/types/common';

type Position = 'end' | 'start';
type Icon = {
  position: Position;
  icon: React.ReactNode;
};
interface IButton {
  type: 'submit' | 'reset' | 'button';
  label?: string;
  onClickHandler?: () => void;
  disabled?: boolean;
  variant: TVariant;
  fullWidth?: boolean;
  className?: string;
  color?: TColor | 'inherit';
  isLoading?: boolean;
  id: string;
  isIconButton?: boolean;
  icon?: Icon;
  size?: TSize;
  sx?: SxProps;
}
const MUIButton = (props: IButton) => {
  const {
    type,
    label,
    onClickHandler,
    disabled,
    variant,
    className,
    fullWidth,
    icon,
    color,
    id,
    sx,
    size = 'medium',
  } = props;

  return (
    <Button
      type={type ?? 'button'}
      size={size}
      variant={variant ?? 'contained'}
      fullWidth={fullWidth}
      color={color}
      className={className}
      onClick={onClickHandler}
      disabled={disabled}
      startIcon={icon?.position && icon.position === 'start' && icon.icon}
      endIcon={icon?.position && icon.position === 'end' && icon.icon}
      disableElevation
      id={id}
      sx={sx}
      data-testid={id}
    >
      {label}
    </Button>
  );
};

export default memo(MUIButton);

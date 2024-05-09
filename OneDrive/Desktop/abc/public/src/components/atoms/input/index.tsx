/* eslint-disable react/prop-types */
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { memo } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type TPosition = 'end' | 'start';
type TIcon = {
  position: TPosition;
  icon: React.ReactNode;
};
type InputProps = {
  id: string;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string | boolean;
  placeholder: string;
  label: string;
  name: string;
  className?: string;
  onBlurHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: 'text' | 'password' | 'email';
  disabled?: boolean;
  icon?: TIcon;
  readOnly?: boolean;
};

const Input = (props: InputProps) => {
  const {
    name,
    id,
    label,
    type = 'text',
    helperText,
    disabled = false,
    icon,
    placeholder,
    className,
    fullWidth,
    onChangeHandler,
    onBlurHandler,
    readOnly = 'false',
    error,
    value,
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      id={id}
      name={name}
      type={showPassword ? 'text' : type}
      disabled={disabled}
      helperText={helperText}
      variant="outlined"
      placeholder={placeholder}
      fullWidth={fullWidth}
      data-testid={id}
      size="medium"
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      className={className}
      aria-readonly={readOnly}
      InputProps={{
        endAdornment: (type === 'password' || (icon && icon.position === 'end')) && (
          <InputAdornment position="end">
            {type === 'password' ? (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                sx={{ mr: -1.5 }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ) : (
              icon?.icon
            )}
          </InputAdornment>
        ),
        startAdornment: icon && icon.position === 'start' && (
          <InputAdornment position="start">
            <IconButton
              aria-label={label}
              disableRipple
            >
              {icon.icon}
            </IconButton>
          </InputAdornment>
        ),
      }}
      error={error}
      value={value}
    />
  );
};

export default memo(Input);

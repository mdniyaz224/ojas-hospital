/* eslint-disable react/prop-types */
import {
  Box,
  Checkbox as MUICheckBox,
  FormControlLabel,
  FormHelperText,
  Typography,
} from '@mui/material';
import { memo } from 'react';
import { TColor } from 'src/types/common';

type TRadioOptionsProps = {
  label: string;
  value: number | string;
};
export interface ICheckBoxProps {
  label?: string;
  name: string;
  className?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  defaultChecked?: boolean;
  value?: string;
  option?: TRadioOptionsProps;
  id: string;
  errorMsg?: string;
  disabled?: boolean;
  readOnly?: boolean;
  color?: TColor;
}

const Checkbox = (props: ICheckBoxProps) => {
  const {
    label,
    name,
    onChangeHandler,
    checked,
    id,
    className,
    color = 'primary',
    disabled,
    readOnly,
    errorMsg,
    value,
  } = props;

  return (
    <Box>
      <FormControlLabel
        control={
          <MUICheckBox
            checked={checked}
            name={name}
            aria-readonly={readOnly}
            onChange={onChangeHandler}
            className={className}
            disabled={disabled}
            color={color}
            id={id}
            size="medium"
            data-testid={id}
            value={value}
          />
        }
        label={<Typography variant="caption">{label ?? ''}</Typography>}
      />
      <FormHelperText error>{errorMsg}</FormHelperText>
    </Box>
  );
};

export default memo(Checkbox);

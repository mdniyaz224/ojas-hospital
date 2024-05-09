import React, { memo } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select as MUISelect, SelectChangeEvent, Box } from '@mui/material';
import DropDownIcon from 'public/assets/dropdown.svg';

interface ISelectOption {
  value: string | number;
  label: string;
}

interface IEmptyOptionProperties {
  showEmptyOption: boolean;
  emptyOptionLabel: string;
}

type TSelectProps = {
  className?: string;
  options: ISelectOption[];
  value: string;
  name: string;
  errorMsg?: string;
  onChangeHandler: (event: SelectChangeEvent) => void;
  onBlurHandler?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  helperText?: string;
  disabled?: boolean;
  id: string;
  height?: number;
  disabledPlaceholder?: boolean;
  emptyOption?: IEmptyOptionProperties;
};
const Select = (props: TSelectProps) => {
  const {
    className,
    options,
    value,
    name,
    id,
    onChangeHandler,
    onBlurHandler,
    disabled,
    height,
    disabledPlaceholder = false,
    emptyOption,
  } = props;
  const { showEmptyOption, emptyOptionLabel } = emptyOption ?? {};
  return (
    <Box width="100%">
      <FormControl
        fullWidth
        className={className}
      >
        <MUISelect
          value={value}
          id={id}
          onChange={onChangeHandler}
          displayEmpty={showEmptyOption}
          inputProps={{ 'aria-label': 'Without label' }}
          name={name}
          onBlur={onBlurHandler}
          disabled={disabled}
          data-testid={id}
          sx={{ height: height }}
          IconComponent={DropDownIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return emptyOptionLabel;
            }
            return selected;
          }}
        >
          <MenuItem
            disabled={disabledPlaceholder}
            value=""
          >
            {emptyOptionLabel}
          </MenuItem>
          {options &&
            options.map(
              (
                item: {
                  value: string | number | readonly string[];
                  label?: string;
                },
                index: React.Key | null
              ) => (
                <MenuItem
                  key={index}
                  value={item.value}
                >
                  {item.label}
                </MenuItem>
              )
            )}
        </MUISelect>
      </FormControl>
    </Box>
  );
};

export default memo(Select);

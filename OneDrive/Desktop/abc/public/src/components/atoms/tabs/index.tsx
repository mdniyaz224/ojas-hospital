/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { ReactNode, SyntheticEvent, memo, useLayoutEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { TAB_DEFAULT_VALUE } from 'src/config/constants';

export type TTabsOptions = {
  label: string;
  value: string;
  children: ReactNode;
};
interface ITabsProps {
  options: TTabsOptions[];
  disabled?: boolean;
}
const Tabs = (props: ITabsProps) => {
  const { options, disabled } = props;
  const [value, setValue] = useState<string>(TAB_DEFAULT_VALUE);
  const defaultChild = options.find((item: TTabsOptions) => item.value === value);
  const [child, setChild] = useState<ReactNode>(defaultChild?.children);
  useLayoutEffect(() => {
    setChild(defaultChild?.children);
  }, [value]);

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="tabs"
          >
            {options.map((item: TTabsOptions) => (
              <Tab
                key={item.value}
                label={item.label}
                value={item.value}
                disabled={disabled}
                sx={{
                  color: 'text.primary',
                }}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel
          value={value}
          key={value}
          sx={{ paddingX: 0 }}
        >
          {child}
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default memo(Tabs);

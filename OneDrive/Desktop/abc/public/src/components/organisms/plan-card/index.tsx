import CheckIcon from '@mui/icons-material/Check';
import { Box, Card, List, ListItem, ListItemIcon, styled, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';
import Button from 'src/components/atoms/button';
import { tokens } from 'src/locales/tokens';
import { neutral } from 'src/theme/colors';
import { convertToCapitalizeCase } from 'src/utils/common';
import { black, grey } from 'src/theme/colors';

import { t } from 'i18next';

const StyledButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

interface IPlanCard {
  items: string[];
  label: string;
  price: string;
  title: string;
  priceBgColor: string;
}

const PlanCard = (props: IPlanCard) => {
  const { items, label, price, title, priceBgColor } = props;
  const subscript = React.createElement('sub', null, convertToCapitalizeCase(t(tokens.label.year)));

  return (
    <Card sx={{ backgroundColor: neutral[300] }}>
      <Box
        py={2}
        textAlign="center"
      >
        <Typography
          variant="h2"
          color={grey.light}
        >
          {title}
        </Typography>
      </Box>
      <Box
        textAlign="center"
        sx={{ background: priceBgColor }}
        py={1.5}
      >
        <Typography
          variant="h3"
          color="text.secondary"
        >
          {price}
          {price !== '$0' && (
            <span
              style={{
                fontFamily: 'Oswald',
                fontSize: '26px',
                fontWeight: 700,
              }}
            >
              {convertToCapitalizeCase(t(tokens.label.year))}
            </span>
          )}
        </Typography>
      </Box>
      <Box
        mt={3}
        display="flex"
        justifyContent="center"
      >
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckIcon sx={{ color: green[500] }} />
              </ListItemIcon>
              <Typography
                variant="caption"
                color={black.dark}
              >
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <StyledButtonBox
        pt={13}
        pb={8}
        sx={{ marginX: { md: 5, lg: 8, xs: 15 } }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          label={label}
          onClickHandler={() => alert(`${label} clicked`)}
          id="get-start"
          fullWidth
          type="button"
          sx={{ bgcolor: priceBgColor, '&:hover': { bgcolor: priceBgColor } }}
        />
      </StyledButtonBox>
    </Card>
  );
};

export default PlanCard;

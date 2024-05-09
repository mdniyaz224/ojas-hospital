import { Box, Stack, styled } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from 'src/components/atoms/typography';
import { tokens } from 'src/locales/tokens';
import Location from 'public/assets/contactus/location.svg';
import Phone from 'public/assets/contactus/phone-number.svg';
import Email from 'public/assets/contactus/email.svg';

const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});
const LocationMain = styled(Typography)({
  lineHeight: '18px',
});

const Contactdetails = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Stack spacing={2}>
        <FlexBox>
          <Box>
            <Email style={{ float: 'left' }} />
          </Box>
          <Typography
            variant="boldBody1"
            id="mail"
          >
            {t(tokens.contactUs.email)}
          </Typography>
        </FlexBox>
        <FlexBox>
          <Box>
            <Phone style={{ float: 'left' }} />
          </Box>
          <Typography
            variant="boldBody1"
            id="mail"
          >
            {t(tokens.contactUs.phone)}
          </Typography>
        </FlexBox>
        <FlexBox>
          <Box>
            <Location style={{ float: 'left' }} />
          </Box>
          <LocationMain
            variant="boldBody1"
            id="mail"
          >
            {t(tokens.contactUs.location)}
          </LocationMain>
        </FlexBox>

        <Box pt={3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11723.589641245273!2d-72.5928987!3d42.107486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ae9bf56313c708f!2s273%20State%20St%2C%20Springfield%2C%20MA%2001103%2C%20USA!5e0!3m2!1sen!2s!4v1649632152103!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ width: '100%', border: 'none', height: 200 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contactdetails;

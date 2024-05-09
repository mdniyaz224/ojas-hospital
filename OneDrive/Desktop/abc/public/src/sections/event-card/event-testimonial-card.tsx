import { Link, Stack, Typography, styled, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import { t } from 'i18next';
import Calendar from 'public/assets/calendar.svg';
import LocationIcon from 'public/assets/location.svg';
import Time from 'public/assets/time.svg';
import { SyntheticEvent, useState } from 'react';
import Button from 'src/components/atoms/button';
import Modal from 'src/components/atoms/modal';
import { useRouter } from 'src/hooks/use-router';
import { tokens } from 'src/locales/tokens';
import URL from 'src/services/urls';
import { IEventProperties } from 'src/store/slicers/event';
import { convertToCapitalCase, mapUrl } from 'src/utils/common';
import { DateFormats, formats, splitDateTime } from 'src/utils/date-locale';
import dynamic from 'next/dynamic';

const GuestUserForm = dynamic(() => import('src/sections/guest-user'));
import { black } from 'src/theme/colors';

const MemberCount = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '0.875rem',
  fontWeight: 600,
  lineHeight: '2.188rem',
});

const AddressBox = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EventName = styled(Typography)`
  height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const EventTestimonialCards = (props: { eventDetails: IEventProperties }) => {
  const { eventDetails } = props;
  const theme = useTheme();
  const router = useRouter();
  const [eventUuid, setEventUuid] = useState<string>('');
  const { uuid, name, eventLocation, membersCount, eventDateTime, eventImageUrl } =
    eventDetails ?? {};
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [guestUser, setGuestUser] = useState<boolean>(false);
  const eventLocationMapUrl = `${mapUrl}${eventLocation}`;

  const GuestUser = () => {
    setGuestUser(true);
    setOpenModal(false);
  };
  const interested = (uuid: string) => {
    setEventUuid(uuid);
    const token = false;
    if (!token) setOpenModal(true);
  };
  return (
    <>
      <Card
        sx={{
          maxWidth: {
            sm: 340,
            md: 300,
            lg: 420,
          },
          background: theme.palette.neutral[50],
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          src={eventImageUrl}
          sx={{ aspectRatio: '16 / 9' }}
          onError={(event: SyntheticEvent<HTMLImageElement, Event>) => {
            const target = event.target as HTMLImageElement;
            target.src = '/assets/default-img.webp';
            onerror = null;
          }}
        />
        <CardContent>
          <EventName
            gutterBottom
            variant="h6"
            my={1.5}
          >
            {convertToCapitalCase(name)}
          </EventName>
          <Stack
            spacing={2}
            direction="row"
            // mt={2}
          >
            <Calendar />
            <Typography variant="caption">
              {splitDateTime(eventDateTime, DateFormats.moreReadable)?.date}
            </Typography>
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            mt={2}
          >
            <Time />
            <Typography variant="caption">
              {
                splitDateTime(eventDateTime, DateFormats.moreReadable, formats.timeWithTimezone)
                  .time
              }
            </Typography>
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            mt={2}
            maxWidth={300}
            height={50}
          >
            <Box>
              <LocationIcon />
            </Box>
            <AddressBox variant="caption">
              <Link
                href={eventLocationMapUrl}
                target="_blank"
                color="text.primary"
              >
                {eventLocation}
              </Link>
            </AddressBox>
          </Stack>
        </CardContent>
        <CardActions sx={{ paddingX: '1.5rem', paddingTop: 1.5 }}>
          <Stack
            spacing={1}
            direction="column"
          >
            <Button
              type="button"
              variant="contained"
              label={t(tokens.cardEvent.button)}
              id="button"
              // onClickHandler={() => interested(uuid)}
            />
            <MemberCount>
              {/* {membersCount} {t(tokens.cardEvent.interested)} */}
              {membersCount === 0
                ? `${t(tokens.cardEvent.notInterested)}`
                : `${membersCount} ${t(tokens.cardEvent.interested)}`}
            </MemberCount>
          </Stack>
        </CardActions>
      </Card>
      <Modal
        open={openModal}
        className="delete-event"
        fullWidth
        maxWidth="xs"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        dialogTitle="Event"
        handleClose={() => setOpenModal(false)}
      >
        <Stack
          direction="row"
          gap={3}
        >
          <Button
            type="button"
            fullWidth
            variant="contained"
            label={t(tokens.label.login)}
            id="login"
            onClickHandler={() => router.push(URL.LOGIN)}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            label={t(tokens.label.guest)}
            onClickHandler={GuestUser}
            id="guest"
          />
        </Stack>
      </Modal>
      <Modal
        open={guestUser}
        className="guest user "
        dialogTitle="Guest User "
        handleClose={() => setGuestUser(false)}
      >
        <GuestUserForm
          eventUuid={eventUuid}
          setGuestUser={setGuestUser}
        />
      </Modal>
    </>
  );
};

export default EventTestimonialCards;

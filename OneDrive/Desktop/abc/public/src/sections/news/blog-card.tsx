import { Box, CardActions, Stack, styled, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { t } from 'i18next';
import { useRouter } from 'next/router';
import Calendar from 'public/assets/calendar.svg';
import Button from 'src/components/atoms/button';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';
import { black, grey } from 'src/theme/colors';
import { handleEmptyValue } from 'src/utils/common';
import { DateFormats, splitDateTime } from 'src/utils/date-locale';

interface IBlogNews {
  title?: string;
  date?: string;
  image?: string;
  description?: string;
  uuid?: string;
  newsCategory: number;
}
const NewDescription = styled(Box)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${black.dark};
`;

export default function BlogCard(props: IBlogNews) {
  const router = useRouter();
  const { title, date, image, description, uuid, newsCategory } = props;
  const theme = useTheme();

  return (
    <Card
      sx={{
        border: `2px solid ${theme.palette.neutral[200]}`,
      }}
    >
      <CardMedia
        component="img"
        height="215"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          color={grey.light}
        >
          {handleEmptyValue(title)}
        </Typography>
        <NewDescription>
          <Typography variant="caption">{handleEmptyValue(description)}</Typography>
        </NewDescription>
        <Stack
          direction="row"
          mt={1.5}
          spacing={1}
          color={black.dark}
        >
          <Calendar />
          <Box pb={1.5}>
            <Typography variant="h6">
              {splitDateTime(date, DateFormats.moreReadable)?.date?.split('-').join(' ')}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
      <CardActions>
        <Box
          mb={2}
          ml={2}
        >
          <Button
            type="button"
            variant="contained"
            color="primary"
            id="more read"
            onClickHandler={() =>
              router.push(`${paths.blog}?id=${uuid}&newsCategory=${newsCategory}`)
            }
            label={t(tokens.label.contiuneReading)}
          />
        </Box>
      </CardActions>
    </Card>
  );
}

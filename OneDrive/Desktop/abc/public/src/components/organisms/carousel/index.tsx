import { Box, useTheme } from '@mui/material';
import type { FC, ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';

interface ICarouselProps {
  slidesToShow?: number;
  slidesToScroll?: number;
  children: ReactNode;
}

export const Carousel: FC<ICarouselProps> = (props) => {
  const { slidesToShow = 3, slidesToScroll = 1, children } = props;
  const theme = useTheme();
  const breakpoints = theme.breakpoints.values;

  // Access breakpoint values from your theme
  const settings: Settings = {
    infinite: false,
    centerMode: false,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: 0,
    arrows: false,
    dots: true,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: breakpoints.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: breakpoints.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: breakpoints.xs,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        '& .slick-dots': {
          bottom: 'unset',
          paddingTop: 4,
        },
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};

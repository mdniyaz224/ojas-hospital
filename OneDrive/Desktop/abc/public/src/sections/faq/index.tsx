import { Box, Container, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { t } from 'i18next';
import ExpandMoreIcon from 'public/assets/expandMoreIcon.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'src/config/constants';
import { tokens } from 'src/locales/tokens';
import Types from 'src/store/constants/faq';
import { rootReducersState } from 'src/store/reducers';
import { grey } from 'src/theme/colors';
import { IFaqRecord } from 'src/types/faq';
import { convertToCapitalizeCase } from 'src/utils/common';

export default function FaqList() {
  const dispatch = useDispatch();
  const faqRecords = useSelector((state: rootReducersState) => state?.faqs?.FaqRecords);

  useEffect(() => {
    let data = {
      page: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
    };
    dispatch({
      type: Types.GET_FAQ_LIST_REQUEST,
      payload: {
        data: { ...data },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [expanded, setExpanded] = useState<string | null>(null);
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ paddingY: { sm: 5, md: 0 }, marginBottom: '7rem' }}
    >
      <Box
        mt={6}
        mb={4}
      >
        <Typography
          variant="h1"
          color={grey.light}
        >
          {`${convertToCapitalizeCase(t(tokens.heading.faq))}'s`}
        </Typography>
      </Box>
      <Box mb={5}>
        {faqRecords?.map((faq: IFaqRecord, index: number) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{ marginBottom: 2 }}
            disableGutters
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails>{faq?.answer}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

import { Box, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tokens } from 'src/locales/tokens';
import URL from 'src/services/urls';
import Types from 'src/store/constants/commitments';
import { rootReducersState } from 'src/store/reducers';
import { convertToCapitalizeCase } from 'src/utils/common';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const CampListing = dynamic(() => import('src/sections/commitment/camp-clinic/listing'));

const CampClinic = () => {
  const dispatch = useDispatch();
  const clinicDescription = useSelector(
    (state: rootReducersState) => state.commitment.clinicDescription
  );
  useEffect(() => {
    dispatch({
      type: Types.GET_CLINIC_DESCRIPTION_REQUEST,
      payload: { resource: URL.CLINIC_DESCRIPTION },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      pt={3}
      pb={8}
      spacing={4}
    >
      <Box>
        <Typography
          variant="h1"
          id="C-heading"
        >
          {convertToCapitalizeCase(t(tokens.campClinic.heading))}
        </Typography>
      </Box>
      <Box>
        <ReactQuill
          theme="bubble"
          value={clinicDescription}
          readOnly
        />
      </Box>
      <Box>
        <CampListing />
      </Box>
    </Stack>
  );
};

export default CampClinic;

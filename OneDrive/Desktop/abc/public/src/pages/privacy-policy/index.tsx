/* eslint-disable react-hooks/exhaustive-deps */
import { Divider, Grid, styled, Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import { Form, Formik, FormikProps } from 'formik';
import { t } from 'i18next';
import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuillEditor } from 'src/components/atoms/editor';
import { TOOL_BAR_OPTIONS } from 'src/config/text-editor';
import PublicLayout from 'src/layouts/public';
import { tokens } from 'src/locales/tokens';
import Types from 'src/store/constants/privacy-policy';
import { rootReducersState } from 'src/store/reducers';
import { grey } from 'src/theme/colors';
import { convertToCapitalizeCase } from 'src/utils/common';

export interface IPrivacyProps {
  answer: string;
}

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: Types.GET_REQUEST });
  }, []);

  const data = useSelector((state: rootReducersState): IPrivacyProps => state?.privacyPolicy?.data);
  const { answer } = data;
  return (
    <Container maxWidth="xl">
      <Box
        mt={6}
        mb={4}
      >
        <Typography
          variant="h1"
          color={grey.light}
        >
          {convertToCapitalizeCase(t(tokens.footer.privacyPolicy))}
        </Typography>
      </Box>
      <StyledDivider />
      <QuillEditor
        height="100%"
        name="answer"
        type="bubble"
        readOnly={true}
        value={answer}
      />
    </Container>
  );
};
export default PrivacyPolicy;

PrivacyPolicy.getLayout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;

const StyledDivider = styled(Divider)({
  border: `1px solid ${grey.darkest}`,
});

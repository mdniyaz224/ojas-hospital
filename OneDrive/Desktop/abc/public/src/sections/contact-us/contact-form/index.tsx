import { Box, Grid, Stack } from '@mui/material';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import Button from 'src/components/atoms/button';
import Input from 'src/components/atoms/input';
import Textarea from 'src/components/atoms/textarea';
import { EMAIL_MAX_LENGTH, FIRST_NAME_LENGTH } from 'src/config/constants';
import { useRouter } from 'src/hooks/use-router';
import { tokens } from 'src/locales/tokens';
import regex from 'src/regex';
import URL from 'src/services/urls';
import Types from 'src/store/constants/user';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required(t(tokens.user.userName))
    .max(FIRST_NAME_LENGTH.MAX, t(tokens.validationMessage.userName)),

  email: Yup.string()
    .required(t(tokens.user.userEmail))
    .email(t(tokens.validationMessage.validEmail))
    .matches(regex.EMAIL, t(tokens.validationMessage.validEmail))
    .max(EMAIL_MAX_LENGTH)
    .required(t(tokens.validationMessage.requiredEmail)),
  subject: Yup.string()
    .required(t(tokens.user.message))
    .max(FIRST_NAME_LENGTH.MAX, t(tokens.validationMessage.message)),
  comment: Yup.string().required(t(tokens.user.comment)),
});

export interface IAddUser {
  name: string;
  email: string;
  subject: string;
  comment: string;
}

const initialValues: IAddUser = {
  name: '',
  email: '',
  subject: '',
  comment: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = (values: IAddUser, action: FormikHelpers<IAddUser>) => {
    let data = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      comment: values.comment,
    };
    dispatch({
      type: Types.CONTACT_US_REQUEST,
      payload: {
        resource: URL.CONTACT_US,
        data: { ...data },
      },
    });
    action.resetForm();
  };
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(props: FormikProps<any>) => {
          const { values, handleBlur, handleChange, errors, touched } = props;

          return (
            <Form autoComplete="off">
              <Grid
                container
                direction="column"
                rowSpacing={3}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                >
                  <Input
                    error={!!(touched.name && errors.name)}
                    fullWidth
                    helperText={touched?.name && (errors?.name as string)}
                    label={t(tokens.placeholder.userName)}
                    name="name"
                    onBlurHandler={handleBlur}
                    onChangeHandler={handleChange}
                    type="text"
                    value={values?.name}
                    placeholder={t(tokens.placeholder.userName)}
                    className=""
                    readOnly={false}
                    id="name"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                >
                  <Input
                    error={!!(touched.email && errors.email)}
                    fullWidth
                    helperText={touched?.email && (errors?.email as string)}
                    label={t(tokens.placeholder.email)}
                    name="email"
                    onBlurHandler={handleBlur}
                    onChangeHandler={handleChange}
                    type="text"
                    value={values?.email}
                    placeholder={t(tokens.placeholder.email)}
                    className=""
                    readOnly={false}
                    id="email"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                >
                  <Input
                    error={!!(touched.subject && errors.subject)}
                    fullWidth
                    helperText={touched?.subject && (errors?.subject as string)}
                    label={t(tokens.placeholder.userSubject)}
                    name="subject"
                    onBlurHandler={handleBlur}
                    onChangeHandler={handleChange}
                    type="text"
                    value={values?.subject}
                    placeholder={t(tokens.placeholder.userSubject)}
                    className=""
                    readOnly={false}
                    id="subject"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                >
                  <Textarea
                    error={!!(touched.comment && errors.comment)}
                    fullWidth
                    helperText={(touched?.comment && errors?.comment) as string}
                    label={t(tokens.placeholder.comment)}
                    name="comment"
                    onBlurHandler={handleBlur}
                    onChangeHandler={handleChange}
                    value={values?.comment}
                    placeholder={t(tokens.placeholder.comment)}
                    className=""
                    readOnly={false}
                    id="comment"
                  />
                </Grid>

                <Grid
                  item
                  xs
                >
                  <Stack
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      type="submit"
                      id="submit"
                      label={t(tokens.buttons.submit)}
                      variant="contained"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ContactForm;

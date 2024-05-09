import { Grid } from '@mui/material';
import { Form, Formik, FormikProps } from 'formik';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Button from 'src/components/atoms/button';
import Input from 'src/components/atoms/input';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, FIRST_NAME_LENGTH, LAST_NAME_LENGTH } from 'src/config/constants';
import { tokens } from 'src/locales/tokens';
import regex from 'src/regex';
import URL from 'src/services/urls';
import Types from 'src/store/constants/event';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(FIRST_NAME_LENGTH.MIN, t(tokens.validationMessage.minimumFirstName))
    .max(FIRST_NAME_LENGTH.MAX, t(tokens.validationMessage.maximumFirstName))
    .matches(regex.NAME, t(tokens.validationMessage.nameValid))
    .required(t(tokens.validationMessage.requiredFirstName)),
  lastName: Yup.string()
    .min(LAST_NAME_LENGTH.MIN, t(tokens.validationMessage.minimumLastName))
    .max(LAST_NAME_LENGTH.MAX, t(tokens.validationMessage.maximumLastName))
    .matches(regex.NAME, t(tokens.validationMessage.nameValid))
    .required(t(tokens.validationMessage.requiredLastName)),
  email: Yup.string()
    .email(t(tokens.validationMessage.validEmail))
    .matches(regex.EMAIL, t(tokens.validationMessage.validEmail))
    .required(t(tokens.validationMessage.requiredEmail)),
  highSchool: Yup.string()
    .min(LAST_NAME_LENGTH.MIN, t(tokens.validationMessage.COLLEGE_NAME_MIN))
    .max(LAST_NAME_LENGTH.MAX, t(tokens.validationMessage.COLLEGE_NAME_MIN))
    .required(t(tokens.validationMessage.college)),
});
export interface IGuestUser {
  firstName: string;
  lastName: string;
  email: string;
  highSchool: string;
}
const initialValues: IGuestUser = {
  firstName: '',
  lastName: '',
  email: '',
  highSchool: '',
};
const GuestUserForm = (props: { eventUuid: string; setGuestUser: any; }) => {
  const { eventUuid, setGuestUser } = props;
  const dispatch = useDispatch();
  const onSubmit = (values: IGuestUser) => {
    let data = {
      page: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,

    };
    dispatch({
      type: Types.ADD_GUEST_USER_REQUEST, payload: {
        resource: URL.ADD_GUEST_USER,
        methods: {},
        data: { uuid: eventUuid, ...values, userId: 0 },
        eventListData: data
      }
    });
    setGuestUser(false);
  };

  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props: FormikProps<IGuestUser>) => {
        const { values, handleBlur, handleChange, errors, touched } = props;
        return (
          <Form>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
              >
                <Input
                  error={!!(touched?.firstName && errors?.firstName)}
                  fullWidth
                  helperText={touched?.firstName && errors?.firstName}
                  label={t(tokens.label.firstName)}
                  name="firstName"
                  onBlurHandler={handleBlur}
                  onChangeHandler={handleChange}
                  type="text"
                  value={values?.firstName}
                  placeholder={t(tokens.placeholder.firstName)}
                  className=""
                  readOnly={false}
                  id="firstName"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Input
                  error={!!(touched?.lastName && errors?.lastName)}
                  fullWidth
                  helperText={touched?.lastName && errors?.lastName}
                  label={t(tokens.label.lastName)}
                  name="lastName"
                  onBlurHandler={handleBlur}
                  onChangeHandler={handleChange}
                  type="text"
                  value={values?.lastName}
                  placeholder={t(tokens.placeholder.lastName)}
                  className=""
                  readOnly={false}
                  id="lastName"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Input
                  error={!!(touched?.email && errors?.email)}
                  fullWidth
                  helperText={touched?.email && errors?.email}
                  label={t(tokens.label.email)}
                  name="email"
                  onBlurHandler={handleBlur}
                  onChangeHandler={handleChange}
                  type="email"
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
              >
                <Input
                  error={!!(touched.highSchool && errors.highSchool)}
                  fullWidth
                  helperText={touched?.highSchool && errors?.highSchool}
                  label={t(tokens.label.highSchool)}
                  name="highSchool"
                  onBlurHandler={handleBlur}
                  onChangeHandler={handleChange}
                  type="text"
                  value={values?.highSchool}
                  placeholder={t(tokens.placeholder.college)}
                  className=""
                  readOnly={false}
                  id="highSchool"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Button
                  type="submit"
                  variant="contained"
                  id="event"
                  // label={t(tokens.buttons.submit)}
                  label='submit'
                />
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default GuestUserForm;
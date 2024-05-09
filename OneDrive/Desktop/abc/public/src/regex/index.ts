const EMAIL = /^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z.-]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$/;
const PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[$@$!%*?&.])(?=.*?[^\w\s]).{8,}$/;
const OTP_VALIDATE = /^[0-9]{1,2}$/g;
const NAME = /^[A-Za-z]+$/;
const INTEGER = /^\d+(\.\d+)?$/;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  EMAIL,
  PASSWORD,
  OTP_VALIDATE,
  NAME,
  INTEGER
};

const namespaces = 'v1.0.0';

const URL = {
  LOGIN: `${process.env.NEXT_PUBLIC_FRONTEND_DASHBOARD_URL}/auth/login`,
  REGISTER: `${process.env.NEXT_PUBLIC_FRONTEND_DASHBOARD_URL}/auth/register`,
  EVENT_LIST: `${namespaces}/events`,
  ADD_GUEST_USER: `${namespaces}/events/interested`,
  CONTACT_US: `${namespaces}/contact-us`,
  FAQ_LIST: `${namespaces}/faqs`,
  ALL_NEWS_LIST: `${namespaces}/news`,
  NEWS_CATEGORY: `${namespaces}/news-category`,
  NEWS_BLOG: `${namespaces}/news`,
  CLINIC_DESCRIPTION: `${namespaces}/camp-clinic/description`,
  COMMITMENTS_LIST: `${namespaces}/commitments`,
  COMMITMENTS_CLASS_LIST: `${namespaces}/commitments/class`,
  GET_PRIVACY_POLICY: `${namespaces}/privacy-policy`,
  CAMP_CLINICS_LIST: `${namespaces}/camp-clinics`,
  GET_TERMS_CONDITIONS: `${namespaces}/term-and-conditions`,
};

export default URL;

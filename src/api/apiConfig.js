// apiConfig.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const mainUrls = {
  root: `${API_BASE_URL}/`,
  docs: `${API_BASE_URL}/docs`,
};

const authUrls = {
  confirmRegistry: `${API_BASE_URL}/confirm-registry`,
  login: `${API_BASE_URL}/login`,
  resendCode: `${API_BASE_URL}/resend-confirmation-code`,
  forgotPassword: `${API_BASE_URL}/forgot-password`,
  confirmForgotPassword: `${API_BASE_URL}/reset-password`,
  changePassword: `${API_BASE_URL}/change-password`,
  logout: `${API_BASE_URL}/logout`,
};

const passwordUrls = {
  forgotPassword: `${API_BASE_URL}/forgot-password`,
  resetPassword: `${API_BASE_URL}/reset-password`,
};

const authAdminUrls = {
  adminRegister: `${API_BASE_URL}/admin/register`,
  adminLogin: `${API_BASE_URL}/admin/login`,
};

const organizationsUrls = {
  list: `${API_BASE_URL}/admin/organizations`,
  create: `${API_BASE_URL}/admin/organizations/new`,
  edit: (org_id) => `${API_BASE_URL}/admin/organizations/edit/${org_id}`,
  delete: (org_id) => `${API_BASE_URL}/admin/organizations/delete/${org_id}`,
};

const usersUrls = {
  list: `${API_BASE_URL}/admin/users`,
  create: `${API_BASE_URL}/admin/users/new`,
  edit: (usersub) => `${API_BASE_URL}/admin/users/edit/${usersub}`,
  delete: (usersub) => `${API_BASE_URL}/admin/users/delete/${usersub}`,
};

const contractsUrls = {
  list: `${API_BASE_URL}/contracts`,
  get: (contract_id) => `${API_BASE_URL}/contracts/${contract_id}`,
  create: `${API_BASE_URL}/contracts/new`,
  edit: (contract_id) => `${API_BASE_URL}/contracts/edit/${contract_id}`,
  delete: (contract_id) => `${API_BASE_URL}/contracts/delete/${contract_id}`,
};

const bonusUrls = {
  list: `${API_BASE_URL}/bonus`,
  get: (bonus_id) => `${API_BASE_URL}/bonus/${bonus_id}`,
  create: `${API_BASE_URL}/bonus/new`,
  edit: (bonus_id) => `${API_BASE_URL}/bonus/edit/${bonus_id}`,
  delete: (bonus_id) => `${API_BASE_URL}/bonus/delete/${bonus_id}`,
};


const notificationsUrls = {
  getConfig: `${API_BASE_URL}/notifications/config`,
  editConfig: `${API_BASE_URL}/notifications/config/edit`,
  get: `${API_BASE_URL}/notifications`,
  mark: `${API_BASE_URL}/notifications/mark`,
  delete: `${API_BASE_URL}/notifications/delete`,
};


export const apiUrls = {
  main: mainUrls,
  auth: authUrls,
  passwords: passwordUrls,
  authAdmin: authAdminUrls,
  organizations: organizationsUrls,
  users: usersUrls,
  contracts: contractsUrls,
  bonus: bonusUrls,
  notifications: notificationsUrls
};

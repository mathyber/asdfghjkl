const getUserName = state => state.userInfoReducer.userInfo;
const getAppConfig = state => state.userInfoReducer.appConfig;
const getProfile = state => state.userInfoReducer.profile;

export default { getUserName, getAppConfig, getProfile }
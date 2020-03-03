const getUserName = state => state.userInfoReducer.userInfo;
const getAppConfig = state => state.userInfoReducer.appConfig;
const getColumns = (state, name) => state.userInfoReducer.appConfig.grids.filter(grid => grid.name === name).flat();
const getProfile = state => state.userInfoReducer.profile;

export default { getUserName, getAppConfig, getProfile, getColumns }
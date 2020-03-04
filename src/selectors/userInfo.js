const getUserName = state => state.userInfoReducer.userInfo;
const getAppConfig = state => state.userInfoReducer.appConfig;
const getProfile = state => state.userInfoReducer.profile;
const getColumns = (state, name) => state.userInfoReducer.appConfig.grids.filter(grid => grid.name === name).map(grid => grid["columns"]).flat();

export default { getUserName, getAppConfig, getProfile, getColumns }
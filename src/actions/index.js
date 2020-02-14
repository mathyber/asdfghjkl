import * as loginActions from './login';
import * as logoutActions from './logout';
import * as userInfoActions from './userInfo';

export default { ...loginActions, ...logoutActions, ...userInfoActions }

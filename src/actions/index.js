import * as loginActions from './login';
import * as logoutActions from './logout';
import * as userInfoActions from './userInfo';
import * as gridActions from './grid';

export default { ...loginActions, ...logoutActions, ...userInfoActions, ...gridActions }

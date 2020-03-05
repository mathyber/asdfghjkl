import * as loginActions from './login';
import * as logoutActions from './logout';
import * as userInfoActions from './userInfo';
import * as gridActions from './grid';
import * as representationActions from "./representation";

export default { ...loginActions, ...logoutActions, ...userInfoActions, ...gridActions, ...representationActions }

import { compose } from 'redux';
import { connect } from 'react-redux';

import actions from '../../actions/';
import Header from '../../components/Header';
import selector from "../../selectors/userInfo"
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

const mapStateToProps = state => ({
    userInfo: selector.getUserName(state),
    appConfig: selector.getAppConfig(state),
    profile: selector.getProfile(state)
});

const mapDispatchToProps = dispatch => ({
    logout: history => dispatch(actions.userLogoutSuccess(history)),
    getUserInfo: () => dispatch(actions.userInfoRequest())
});

export default compose(
    withTranslation(),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
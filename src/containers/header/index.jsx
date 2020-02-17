import { compose } from 'redux';
import { connect } from 'react-redux';

import actions from '../../actions/';
import Header from '../../components/Header';
import selector from "../../selectors/userInfo"
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

const mapStateToProps = state => ({
    userData: selector.getUserName(state)
});

const mapDispatchToProps = dispatch => ({
    logout: history => dispatch(actions.userLogoutSuccess(history)),
    getUserInfo: () => dispatch(actions.userInfoRequest())
});

export default compose(
    withRouter,
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
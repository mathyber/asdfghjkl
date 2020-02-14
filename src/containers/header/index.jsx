import { compose } from 'redux';
import { connect } from 'react-redux';

import actions from '../../actions/';
import Header from '../../components/Header';
import selector from "../../selectors/userInfo"
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
    userData: selector.getUserName(state)
});

const mapDispatchToProps = dispatch => ({
    logout: history => dispatch(actions.userLogoutSuccess(history)),
    getUserInfo: () => dispatch(actions.userInfoRequest())
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
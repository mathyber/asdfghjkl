import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import actions from '../../store/actions';
import Header from '../../components/Header'

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    logout: history => dispatch(actions.userLogoutSuccess(history))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
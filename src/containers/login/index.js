import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import actions from '../../store/actions';

import LoginForm from '../../components/LoginForm';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators({login: (data, history) => actions.userLoginRequest(data, history)}, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
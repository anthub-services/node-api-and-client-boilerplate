import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { auth } from '../../Actions/Sessions'
import SignInForm from '../../../Components/Forms/SignIn'

function mapStateToProps({ IsSignedIn }) {
  return { IsSignedIn }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ auth }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)

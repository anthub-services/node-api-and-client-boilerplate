import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { auth } from '../../Actions/Sessions'
import SignOutButton from '../../../Components/Button/SignOut'

function mapStateToProps({ isSignedIn }) {
  return { isSignedIn }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ auth }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton)

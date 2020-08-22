import { connect } from 'react-redux';
import Sidebar from './Sidebar';

let mapStateToProps = (state) => ({
  state: state
})

const SideBarContainer = connect(mapStateToProps)(Sidebar);

export default SideBarContainer;
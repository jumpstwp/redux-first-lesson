import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    // console.log(this.props.userId);
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // console.log(this.props.users);
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) {
      return <div>Loading...</div>;
    }
    return <div className="header"> {user.name}</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);

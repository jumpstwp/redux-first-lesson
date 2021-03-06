import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  //   componentDidMount() {
  //     // console.log(this.props.userId);
  //     this.props.fetchUser(this.props.userId);
  //   }
  render() {
    // console.log(this.props.users);
    // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;

    if (!user) {
      return <div>Loading...</div>;
    }
    return <div className="header"> {user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);

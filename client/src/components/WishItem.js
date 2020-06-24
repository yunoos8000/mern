import React, { Component } from "react";

export default class WishItem extends Component {
  render() {
      
      const {_id, wish} = this.props.wish;
      const {removeWish} = this.props;
    return (
        <React.Fragment>
      <li className="collection-item darkness blue-grey darken-1 white-text "
       
      >{wish} <i onClick={()=>removeWish(_id)} className="secondary-content material-icons white-text ">delete</i></li>
      </React.Fragment>
    );
  }
}

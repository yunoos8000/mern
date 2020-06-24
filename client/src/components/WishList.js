import React, { Component } from "react";
import WishItem from "./WishItem";

export default class WishList extends Component {
  render() {
      const {wishList, removeWish} = this.props
      // console.log(this.props);
      
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header teal lighten-0">
            <h4>Wish List</h4>
          </li>
          {/* <% var i =0; wish.forEach(function(item) { %> */}

          {wishList.map(item=>(<WishItem key={item._id} wish={item} removeWish={removeWish}/>))}
            {/* <%= item.wish %> */}
            {/* <!-- <i class="material-icons dp48 secondary-content white-text"
            onclick='deleteItem(this)' >delete</i> --> */}
          {/* </li> */}
          {/* <%  i++; });  %> */}
        </ul>
      </div>
    );
  }
}

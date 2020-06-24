import React, { Component } from "react";
import WishList from "./WishList";
import { connect } from 'react-redux';
import { changeText, fetchWishAction, submitWishAction, removeWishAction } from '../actions/myaction'

class Home extends Component {
  state = {
    text: "",
    wishes: [{ _id: 1, wish: "Lodding" }],
  };

  componentDidMount() {
    // fetch("/gethome",{method:'get'})
    //   .then((res) => res.json())
    //   .then((res2) => {
    //     return this.setState({
    //       wishes: res2,
    //     });
    //   });
    
    this.props.fetchWishes  ();
  }
    // changeText = (e) => {
  //   this.setState({
  //     text: e.target.value,
  //   });
  // };


  // removeWish = (id) => {
    
  // };

  render() {
    console.log(this.props);
     
    return (
      <div>
        <h1>This is a Home Page</h1>
        <form onSubmit={this.props.submitWishAction}>
          <div className="row">
            <div className="col s3"></div>
            <div className="input-field col s6">
              <input
                name="item"
                id="item"
                type="text"
                value={this.props.text}
                onChange={(e)=>this.props.changeText(e.target.value)}
              />
              <label className="active">Wish</label>
            </div>
            <div className="col s3"></div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
        <WishList wishList={this.props.wishes} removeWish={this.props.removeWishAction} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    text : state.text,
    wishes : state.myWishes
  
})

const mapDispatchToProps = (dispatch) => {
  return {
  changeText: (input)=>{dispatch(changeText(input))},
  fetchWishes: ()=>{dispatch(fetchWishAction())},
  submitWishAction: (e)=>{dispatch(submitWishAction(e))},
  removeWishAction: (id)=>{dispatch(removeWishAction(id))}
}
}


export default connect(mapStateToProps, mapDispatchToProps)(Home) ;
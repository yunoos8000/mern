export const changeText = (input) => {
  
    return {type:"CHANGE_TEXT", payload: input}
    // this.setState({
    //   text: e.target.value,
    // });
  };

  export const fetchWishAction = () => {
    return (dispatch)=>{
      fetch("/gethome",{method:'get'})
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
        dispatch({type:"GET_WISH", payload: res2});
      });
    }
  }
  export const submitWishAction = (e) => {
    return (dispatch)=>{
      e.preventDefault();
      // const url = "http://localhost:3001/sent";
      var data = new URLSearchParams();
      for (const pair of new FormData(e.target)) {
        console.log(pair);
        data.append(pair[0], pair[1]);
      }
  
      fetch("/sent", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((res2) => {
          console.log(res2);
          dispatch({type:"ADD_WISH", payload: res2});
          // this.setState({
          //   text: "",
          //   wishes: [...this.state.wishes, res2],
          // });
          // // document.location.reload();
        });
    }
  }
  export const removeWishAction = (id) => {
    return (dispatch)=>{
      console.log("Deleting " + id);
    fetch("/delete/" + id, { method: "delete" })
      .then((res) => res.json())
      .then((res2) => {
        //   console.log(res2);
        dispatch({type:"REMOVE_WISH", payload: res2});
        // const wishlist = this.state.wishes.filter(
        //   (item) => item._id !== res2._id
        // );
        // return this.setState({
        //   wishes: wishlist,
        // });
      });
    }
  }

document.getElementById("myForm").onsubmit = (e) => {
    e.preventDefault();
    const url = "https://ypa-wish-list.herokuapp.com/sent";
    var data = new URLSearchParams();
    for (const pair of new FormData(e.target)) {
      // console.log(pair);
      data.append(pair[0], pair[1]);
    }

    fetch(url, {
      method: "post",
      body: data,
    }).then((res) => res.json())
      .then((res2) => {
        // console.log(res2);
        location.reload();
      });
  };

  deleteItem = (item) => {
    const url = "https://ypa-wish-list.herokuapp.com/delete/" + item.innerText;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((res2) => {
        location.reload()
      });
  };
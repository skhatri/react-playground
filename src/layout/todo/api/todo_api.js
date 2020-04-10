class TodoClient {
  async listItems(cb) {
    fetch("http://localhost:8080/todo/search")
      .then((res) => res.json())
      .then((responseData) => responseData.data)
      .then((data) => {
        if (typeof cb !== "undefined") {
          cb(data, undefined);
        }
      })
      .catch((err) => {
        if (typeof cb !== "undefined") {
          cb(undefined, err);
        }
      });
  }

  async addItem(item, cb) {
    item.id = "";
    fetch("http://localhost:8080/todo/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (typeof cb !== "undefined") {
          cb(responseData.data, undefined);
        }
      })
      .catch((err) => {
        if (typeof cb !== "undefined") {
          cb(undefined, err);
        }
      });
  }

  async updateItem(item, cb) {
    fetch(`http://localhost:8080/todo/${item.id}`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (typeof cb !== "undefined") {
          cb(responseData.data, undefined);
        }
      })
      .catch((err) => {
        if (typeof cb !== "undefined") {
          cb(undefined, err);
        }
      });
  }

  async deleteItem(itemId, cb) {
    fetch(`http://localhost:8080/todo/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (typeof cb !== "undefined") {
          cb(responseData.data, undefined);
        }
      })
      .catch((err) => {
        if (typeof cb !== "undefined") {
          cb(undefined, err);
        }
      });
  }
}

export default TodoClient;

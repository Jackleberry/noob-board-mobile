// const noobApiUrl = "http://localhost:3002/api/noobs";
const noobApiUrl = "https://pure-crag-60488.herokuapp.com/api/noobs";

class NoobApi {

  static getAllNoobs() {
    return fetch(noobApiUrl, {
      accept: 'application/json'
    })
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        console.log(".................... E");
        console.log(error);
        console.log(".................... E");
        throw(error);
      });
  }

  static getNoob(id) {
    return fetch(`${noobApiUrl}/${id}`)
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw(error);
      });
  }

  static addNoob(name) {
    return fetch(noobApiUrl, {
      method: "POST",
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({noob: name})
    })
      .then(res => res.json());
  }

  static deleteNoob(id) {
    return fetch(`${noobApiUrl}/${id}`, {
      method: "DELETE",
      headers: new Headers({'Content-Type': 'application/json'}),
    }).catch(error => {
      throw(error);
    });
  }

  static addNoobPoint(id) {
    return fetch(`${noobApiUrl}/${id}/noob`, {
      method: "POST"
    })
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw(error);
      });
  }

  static addAssassinPoint(id) {
    return fetch(`${noobApiUrl}/${id}/assassin`, {
      method: "POST"
    })
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw(error);
      });
  }

  static checkStatus(response) {
    if (!response.ok) {
      throw("Did not receive 200 status code back.");
    }
    return response;
  }
}

export default NoobApi;

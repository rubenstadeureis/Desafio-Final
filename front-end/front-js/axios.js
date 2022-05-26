const url = "http://localhost:3000/allpoke";

function getPoke() {
  axios
    .get(url)

    .then((response) => {
      const data = response.data
      console.log(data);     
     
    })
    .catch((error) => console.log(error));
}

getPoke();

window.onload = () => {
  const url = "http://localhost:3000/allpoke";

  async function getPoke() {
    const {data} = await axios.get(url)
  
        console.log(data);
        let text = "";

        data.forEach(myFunction);

        function myFunction(pokemon, index) {
          text += "<div class='cards'>" + pokemon.Name + "<br>" + `<img src=${`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon['Img name'].toString().padStart(3, "0")}.png`}>`+ "</div>";
        }

        document.getElementById("cardsRender").innerHTML = text;    
  }

  getPoke();


}
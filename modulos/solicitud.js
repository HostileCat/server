const peticion = () =>{
    fetch('http://127.0.0.1:3000/docs')
      .then(response => response.json())
      .then(json => {
        return json;
      })
}

export default peticion


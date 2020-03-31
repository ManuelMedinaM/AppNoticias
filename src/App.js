import React,{Component} from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';

 class App extends Component {
  state ={
    noticias:[]
  } 


  componentDidMount() {
    this.consultarNoticias();
}
//esi no le pasamos nada el parameto por default esgeneral
consultarNoticias=(categoria = 'general') =>{
    console.log(categoria)
    let url =`https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=b8e8fc02f8084657a416601f7b80354a`;

    //Utilizando fetch para retornar una respuesta del servidor
    fetch(url)
        .then(respuesta =>{
            return respuesta.json();
        })
    //aqui ya tenemos el objeto con las noticias
        .then(noticias =>{
            this.setState({
              noticias : noticias.articles
            })
        })
}

    render() {
        return (
            <div className="contenedor-app">
                <Header
                  titulo='Noticias'
                />
                <div className="container white contenedor-noticias">
                  <Formulario
                  //le vaos a pasar al formulario el mismo metodo que hace la consulta
                    consultarNoticias = {this.consultarNoticias}
                  />
                  <Noticias
                    noticias = {this.state.noticias}
                  />
                </div>
            </div>
        );
    }
}

export default App


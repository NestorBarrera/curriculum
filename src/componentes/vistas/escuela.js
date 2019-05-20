import React,{Component}from'react';
import '../../CSS/estilo.css';
class Escuela extends Component{
    render(){
        return(
<div className="container">
    <div className="padre">

        <div className="card" style={{width: "18rem"}}>
        <img src={require('../../img/venados.png')} class="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Universidad Tecnológica de la Sierra Hidalguense</h5>
            <p className="card-text">Ciudad: México <br/>Estado: Hidalgo <br/>Localidad: Zacualtipán de Ángeles Hidalgo <br/>Código Postal: 43200  <br/>Año: 2017-2021</p>
            <a href="http://www.utsh.edu.mx/php/inicio.php" className="btn btn-primary">Ir a dirección</a>
        </div>
        </div>


        <div className="card" style={{width: "18rem"}}>
        <img src={require('../../img/cobaeh2.jpg')} class="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Colegio de Bachilleres del Estado de Hidalgo</h5>
            <p className="card-text">Ciudad: México <br/>Estado: Hidalgo <br/>Localidad: San Agustín Metzquititlán <br/>Código Postal: 43380  <br/>Año: 2014-2017</p>
            <a href="https://www.cobaeh.edu.mx/" className="btn btn-primary">Ir a dirección</a>
        </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
        <img src={require('../../img/FB_IMG_1558375792010.jpg')} class="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">Secundaria General Nicandro Castillo</h5>
            <p className="card-text">Ciudad: México <br/>Estado: Hidalgo <br/>Localidad: San Agustín Metzquititlán <br/>Código Postal: 43380  <br/>Año: 2010-2014</p>
            <a href="https://es-la.facebook.com/pages/category/School/Secundaria-General-Nicandro-Castillo-nicassam-516785991798266/" className="btn btn-primary">Ir a dirección</a>
        </div>
        </div>

        
    </div>
</div>
        );
    }
}
export default Escuela;
import React,{Component}from'react';
class Personales extends Component{
    render(){
      return(
<div class="container">

      <div>
        <img src={require('../img/fondo.jpg')} class="mr-3"/>
      </div>

      <div class="alert alert-success" role="alert">
        <h4 class="bienvenida"><center>Bienvenido a tú Curriculum Vitae</center></h4>
      </div>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1 class="card-title">Datos Personales</h1>
          <p class="card-text">Aquí se muestraran los datos personales del curriculum.</p>
          <a href="#" class="btn btn-primary">Ir a datos personales</a>
        </div>
      </div>

      <div class="card" style="width: 18rem;" >
        <div class="card-body">
          <h1 class="card-title">Datos Escolares</h1>
          <p class="card-text">Aquí se muestraran los datos escolares del curriculum.</p>
          <a href="#" class="btn btn-primary">Ir a datos escolares</a>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1 class="card-title">Experiencia Laboral</h1>
          <p class="card-text">Aquí se muestraran las experiencia laboral del curriculum.</p>
          <a href="#" class="btn btn-primary">Ir a experiencia laboral</a>
        </div>
      </div>
</div>
        );
    }
}
export default Personales;
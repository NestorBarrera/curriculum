import React,{Component}from'react';
import '../../CSS/estilo.css';
class Experiencia extends Component{
    render(){
      return(
<div className="container">
<p>
  <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Primer Trabajo</a>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Segundo Trabajo</button>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Tercer Trabajo</button>
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2 multiCollapseExample3">Todos mis trabajos</button>
</p>
<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        Profesor de Preparatoria.
      </div>
    </div>
  </div>
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body">
        Seguridad de BD en SQL.
      </div>
    </div>
  </div>
</div>

<div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample3">
      <div className="card card-body">
        Diseño en Google.
      </div>
    </div>
  </div>
</div>
        );
    }
}
export default Experiencia;
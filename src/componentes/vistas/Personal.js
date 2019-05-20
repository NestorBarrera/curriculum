import React,{Component}from'react';
import '../../CSS/estilo.css';
class Personal extends Component{
    render(){
        return(
<div className="container">
    <div align="center">
        <div className="card" style={{width: "30rem"}}>
            <img src={require('../../img/ima.jpg')} className="card-img-top" />
            <div className="card-body">
                <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Nombre: Néstor Barrera Catón</span>
                        </div>

                        <div className="input-group-prepend">
                            <span className="input-group-text">Fecha de nacimiento: 4 de Julio de 1998</span>
                        </div>

                        <div className="input-group-prepend">
                            <span className="input-group-text">Lugar de nacimiento: Zacualtipán de Ángeles Hidalgo</span>
                        </div>

                        <div className="input-group-prepend">
                            <span className="input-group-text">Dirección: Victor López s/n</span>
                        </div>
                        
                        <div className="input-group-prepend">
                            <span className="input-group-text">Código Postal: 43380</span>
                        </div>

                        <div className="input-group-prepend">
                            <span className="input-group-text">Número teléfono: 7711632466</span>
                        </div>
                            
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}
export default Personal;
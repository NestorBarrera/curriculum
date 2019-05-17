import React,{Component}from'react';
import '../../CSS/estilo.css';
class Personal extends Component{
    render(){
        return(
<div className="container">
    <div class="center">
        <div className="card" style={{width: "18rem"}}>
            <img src={require('../../img/ima.jpg')} className="card-img-top" />
            <div className="card-body">
                <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">First and last name</span>
                        </div>
                            <input type="text" aria-label="First name" class="form-control"/>
                            <input type="text" aria-label="Last name" class="form-control"/>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}
export default Personal;
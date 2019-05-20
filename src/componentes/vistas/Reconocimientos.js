import React,{Component}from'react';
import '../../CSS/estilo.css';
class Reconocimientos extends Component{
    render(){
        return(
    <div className="container">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={require('../../img/pre1.jpg')} class="d-block w-100" />
            </div>
            <div class="carousel-item">
            <img src={require('../../img/pre2.jpeg')} class="d-block w-100" />
            </div>
            <div class="carousel-item">
            <img src={require('../../img/pre3.jpg')} class="d-block w-100" />
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </div>
        );
    }
}
export default Reconocimientos;

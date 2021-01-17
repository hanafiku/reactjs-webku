import React, { Component} from "react";
import "../Product.css";

class CardProduct extends Component {
    state = {
        order: 4
    }
    HandleCounterChange = (anyar) =>{
        this.props.onCounterChange(anyar);
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.HandleCounterChange(this.state.order);
        })
    }
    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.HandleCounterChange(this.state.order);
            })
        }
    }

  render() {
    return (
        <div className="card">
          <div className="img-thumb-product">
            <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/sayur/Baby+Caisim.jpg" alt="" />
          </div>
          <p className="product-title">Ayam geprek enak zuhu</p>
          <p className="product-price">Rp 20.000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>-</button>
            <input type="text " className="cont" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>+</button>
          </div>
        </div>
            );
  }
}
export default CardProduct;

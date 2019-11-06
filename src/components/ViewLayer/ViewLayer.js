import React, { Component } from 'react';

class ViewLayer extends Component {
    constructor(props){
        super(props);
        this.state = {
          // add your favorite pizza topping to this array so that it always appears first in the list
          toppings: ['pepperoni'],
          welcomeMessage: '',
          name: '',
          displayName: '',
          topping: ''
        }
      }
      addToToppings = (event) => {
          event.preventDefault(); 
          let toppings = this.state.toppings;
          toppings.push(this.state.topping);
          this.setState({
              ...this.state, 
              toppings: toppings, 
              topping: ''
          })
      }
      componentDidMount(){
        this.setWelcomeMessage();
      }
      handleChange = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    }
      setDisplayName = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            displayName: `, ${this.state.name}!`,
            name: ''
        })
      }
      setWelcomeMessage = () => {
        this.setState({
          ...this.state,
          // edit the welcome message that displays by editing the value of "welcomeMessage"
          welcomeMessage: 'Welcome'
        })
      }
    render() {
        return (
            <div className="col-12 flex-box-center">
                <div className="col-6">
                    <div className="layer">
                        <h2>{this.state.welcomeMessage}{this.state.displayName}</h2>
                        <div className="white">
                            <img src={require('../App/Octocat.png')} height="105px"/>
                        </div>
                        <h3>This is a simple web app to help you learn the basics of GitHub for your GPS courses.</h3>
                  
                        {this.state.displayName.length === 0 ? (<div><label>What's your name? </label>
                        <form onSubmit={(event)=>this.setDisplayName(event)}>
                            <input type="text" value={this.state.name} onChange={(event)=>this.handleChange(event, 'name')}/>
                        <button>Submit</button>
                        </form></div>) : (<div>
                            <h4>Here's a list of our favorite pizza toppings. Add yours to the list!</h4>
                            <label>Favorite topping:</label>
                            <form onSubmit={(event)=>this.addToToppings(event)}>
                            <label>Favorite topping:</label> <input type="text" value={this.state.topping} onChange={(event)=>this.handleChange(event, 'topping')}/>
                            </form>
                            <ul>
                                {this.state.toppings.map((topping, i) => {
                                    return(
                                        <li key={i}><div><img src={require('../App/pizza-slice.svg')} className="icon" height="25px"/>{topping}</div><button className="delete">Remove</button></li>
                                    )
                                })}
                            </ul>
                        </div>)}
                    </div>
                </div>
            </div>

        )
    }
}
export default ViewLayer;
import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    render() {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleClick}>
                    <input type='text' placeholder='Pseudo' required value={this.state.pseudo}
                           onChange={this.handleChange}/>
                    <button type="submit">Valider</button>
                </form>
            </div>
        )
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({pseudo})
    }

    handleClick = event => {
        event.preventDefault()
        this.setState({goToChat: true})
    }
}

export default Connexion
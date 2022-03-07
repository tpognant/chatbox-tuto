import React, {Component} from 'react';

class Formulaire extends Component {

    state = {
        message: ''
    }

    createMessage = () => {
        const {addMessage, pseudo} = this.props

        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        //reset
        this.setState({ message: ''})
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('submit')
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        this.setState({ message})
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <textarea required maxLength='140' onChange={this.handleChange} value={this.state.message}/>
                <div className='info'>
                    140
                </div>
                <button type='submit'>
                    Envoyer
                </button>
            </form>
        );
    }
}

export default Formulaire;
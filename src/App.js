import React, {Component} from 'react'
import './App.css'
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

class App extends Component {

    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }

    addMessage = (message) => {
        const messages = {...this.state.messages}
        messages[`message-${Date.now()}`] = message
        this.setState({messages})
    }

    render() {

        const messages = Object.keys(this.state.messages)
            .map(value => (
                <Message
                    key={value}
                    pseudo={this.state.messages[value].pseudo}
                    message={this.state.messages[value].message}
                />
            ))

        return (
            <div className='box'>
                <div>
                    <div className='messages'>
                        {messages}
                    </div>
                </div>
                <Formulaire
                    length={140}
                    pseudo={this.state.pseudo}
                    addMessage={this.addMessage} />
            </div>
        )
    }
}

export default App

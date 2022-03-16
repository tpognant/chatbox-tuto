import React, {Component, createRef} from 'react'
import './App.css'
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";
import base from "./base"

class App extends Component {

    state = {
        messages: {},
        pseudo: this.props.match.params.pseudo
    }

    messagesRef = createRef()

    componentDidMount() {
        base.syncState('/', {
            context: this,
            state: 'messages'
        })
    }

    componentDidUpdate() {
        const ref = this.messagesRef.current
        ref.scrollTop = ref.scrollHeight
    }


    addMessage = (message) => {
        const messages = {...this.state.messages}
        messages[`message-${Date.now()}`] = message

        Object.keys(messages)
            .slice(0, -10)
            .forEach(key => messages[key] = null)

        this.setState({messages})
    }

    isCurrentUser = pseudo => {
        return this.state.pseudo === pseudo
    }

    render() {

        const messages = Object.keys(this.state.messages)
            .map(value => (
                <Message
                    key={value}
                    isCurrentUser={this.isCurrentUser}
                    pseudo={this.state.messages[value].pseudo}
                    message={this.state.messages[value].message}
                />
            ))

        return (
            <div className='box'>
                <div>
                    <div className='messages' ref={this.messagesRef}>
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

import React from 'react'
import Api from '../api'
import MessageCol from './message-col'
import {
  Container,
  ButtonDiv,
  Button,
  MessageColDiv
} from './message-list-styles'

class MessageList extends React.PureComponent {
  constructor (...args) {
    super(...args)
    this.state = {
      messages: [],
      errorMessages: [],
      warningMessages: [],
      infoMessages: []
    }
  }

  api = new Api({
    messageCallback: message => {
      this.messageCallback(message)
    }
  })

  componentDidMount () {
    this.api.start()
  }

  messageCallback (message) {
    const {
      messages,
      errorMessages,
      warningMessages,
      infoMessages
    } = this.state
    this.setState({
      messages: [...messages.slice(), message]
    })
    if (message.priority === 1) {
      this.setState({ errorMessages: [...errorMessages.slice(), message] })
    }
    if (message.priority === 2) {
      this.setState({ warningMessages: [...warningMessages.slice(), message] })
    }
    if (message.priority === 3) {
      this.setState({ infoMessages: [...infoMessages.slice(), message] })
    }
  }

  handleClick = () => {
    const isApiStarted = this.api.isStarted()
    if (isApiStarted) {
      this.api.stop()
    } else {
      this.api.start()
    }
    this.forceUpdate()
  }

  clearMessages = () => {
    this.setState({ messages: [] })
  }

  clearMessage = id => {
    const messages = this.state.messages.filter(message => message.id !== id)
    this.setState({ messages })
  }

  render () {
    const isApiStarted = this.api.isStarted()
    return (
      <Container>
        <ButtonDiv>
          <Button onClick={this.handleClick}>
            {isApiStarted ? 'STOP' : 'START'}
          </Button>
          <Button onClick={this.clearMessages}>CLEAR</Button>
        </ButtonDiv>
        <MessageColDiv>
          <MessageCol
            title='Error Type 1'
            messages={this.state.errorMessages}
            themeColor='#F56236'
            clearMessage={this.clearMessage}
          />
          <MessageCol
            title='Warning Type 2'
            messages={this.state.warningMessages}
            themeColor='#FCE788'
            clearMessage={this.clearMessage}
          />
          <MessageCol
            title='Info Type 3'
            messages={this.state.infoMessages}
            themeColor='#88FCA3'
            clearMessage={this.clearMessage}
          />
        </MessageColDiv>
      </Container>
    )
  }
}

export default MessageList

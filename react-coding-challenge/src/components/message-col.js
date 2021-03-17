import React from 'react'
import MessagesCol from './messages-col'
import { MessageColContainer, ColHeader } from './message-col-styles'

export const MessageCol = props => {
  const { title, messages, themeColor, clearMessage } = props
  return (
    <MessageColContainer>
      <ColHeader>
        <div className='colHeaderText'>{title}</div>
        <div class='colSubHeaderText'>Count {messages.length}</div>
      </ColHeader>
      <MessagesCol
        messages={messages}
        themeColor={themeColor}
        clearMessage={clearMessage}
      ></MessagesCol>
    </MessageColContainer>
  )
}

export default MessageCol

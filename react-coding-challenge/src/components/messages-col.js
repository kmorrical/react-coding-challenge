import React from 'react'
import { MessageContainer } from './messages-col-styles.js'

export const MessagesCol = props => {
  const { messages, themeColor, clearMessage } = props
  return (
    <>
      {messages &&
        messages.reverse().map((message, index) => (
          <MessageContainer
            key={index}
            themeColor={themeColor}
          >
            <div className='notificationText'>
              <span>{message.message}</span>
            </div>
            <div className='clearText' onClick={() => clearMessage(message.id)}>
              Clear
            </div>
          </MessageContainer>
        ))}
    </>
  )
}

export default MessagesCol

import styled from 'styled-components'

export const MessageContainer = styled.div`
background-color: ${props => props.themeColor};
height: 100px;
width: 100%;
min-width: 260px;
border-radius: 5px;
-webkit-box-shadow: 0 10px 6px -6px #777;
-moz-box-shadow: 0 10px 6px -6px #777;
     box-shadow: 0 10px 6px -6px #777;
margin: 5px 5px 9px 5px;

.clearText {
    font-weight: 800;
    width: auto;
    display: inline-block;
    width: 20%
    text-align: center;
    height: 100%;
}

.notificationText {
    margin: 10px 0 0 8px;
    width: 80%;
    display: inline-block;
    font-weight: 800;
    vertical-align: middle;
    height: 100%
}

span {
    margin-left: 20px;
    margin-top: 20px;
}
`

import * as React from "react";

import styled from 'styled-components';


const StyledInput = styled.div`
    background: rgb(70,70,70);
    padding:7px 15px;
    border-radius: 5px;
    font-size:20px;
    flex-grow: 2;
    
    &:hover{
        background: rgb(80,80,80);
    }
`;

const Root = styled.div`
    display:flex;
    flex-direction:row;
    align-items: stretch;
`;

const CopyButton = styled.div`
    transition:.2s;
    background: rgb(220,0,0);
    display:flex;
    align-items:center;
    padding: 0px 20px;
    font-weight:bold;
    cursor:Pointer;
    transform-origin: center center;
    transform: scale(1.1,1.1);
    border-radius:5px;
    margin-left:-10px;
    user-select: none;
    
    &:hover{
        transition:.2s;
        background: rgb(240,0,0);
        filter: drop-shadow(0 0 1rem #DC143C);
    }
    
    &:active{
        transform: scale(0.99,0.99);
    }
`;

class CopyableText extends React.Component {


    constructor(props) {
        super(props);
        this.state = {copyText: "Kopieren"};
    }

    fallbackCopyTextToClipboard(text) {
        let textArea = document.createElement("textarea");
        textArea.value = text;

        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (err) {
            console.error(err);
        }

        document.body.removeChild(textArea);
    }

    copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            this.fallbackCopyTextToClipboard(text);
            this.setState({copyText: "Kopiert!"})
            return;
        }
        navigator.clipboard.writeText(text).then(() => {
            this.setState({copyText: "Kopiert!"})
        }, err => console.error(err));
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <Root style={this.props.style}>
                <StyledInput>
                    <span>{this.props.text}</span>
                </StyledInput>
                <CopyButton
                    onClick={(e) => {
                        this.copyTextToClipboard(this.props.text);
                        this.timer = setTimeout(() => {
                            this.setState({copyText: "Kopieren"})
                        }, 1000);
                    }}>
                    <span>{this.state.copyText}</span>
                </CopyButton>
            </Root>
        );
    }

}

export default CopyableText
import React from "react"
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWindowClose} from "@fortawesome/free-solid-svg-icons"

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 50%;
    background: white;
    border-radius: 10px;
    background-color: #dddddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const Cross = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    :hover {
        cursor: pointer;
    }
`;


function Modal({children, onClose}: {children: any, onClose: Function}) {
    return <ModalWrapper>
        <ModalContainer>
            {children}
            <Cross onClick={() => onClose()}>
                <FontAwesomeIcon icon={faWindowClose} />
            </Cross>
        </ModalContainer>
    </ModalWrapper>
}

export default Modal;
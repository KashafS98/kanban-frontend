import React from 'react'
import styled from '@emotion/styled'
import puffinLogo from '../assets/favicon.png'
import { headerColor } from '../utils/constants'

const HeaderContainer = styled.div`
    min-width: 100vw;
    min-height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${headerColor};
    color: #323031;
    font-size: 24px;
    font-weight: 500;
`

export default function Header() {
    return (
        <HeaderContainer>
            <img width='35vh' src={puffinLogo} alt='Hello, I am a Puffin!'/>
            Puffin - A KanBan Board
        </HeaderContainer>
    )
}

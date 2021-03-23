import React from 'react'
import styled from '@emotion/styled'

const HeaderContainer = styled.div`
    width: 100%;
    min-height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFC857;
    color: #323031;
    font-size: 24px;
`

export default function Header() {
    return (
        <HeaderContainer>
            Puffin - A KanBan Board
        </HeaderContainer>
    )
}

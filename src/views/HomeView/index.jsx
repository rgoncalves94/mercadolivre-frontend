import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'

function HomeView({ ...props}) {
    return (
        <React.Fragment>
            <Header />
            <Content noBgColor> Home </Content>
        </React.Fragment>
    )
}

export default HomeView
import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import './styles.scss'

function HomeView({ ...props}) {
    return (
        <React.Fragment>
            <Header />
            <Content noBgColor> 
                <div className="home-view col-12">
                    <h3 className="home-view-tip">Utilize a barra de pesquisa.</h3>
                </div>
            </Content>
        </React.Fragment>
    )
}

export default HomeView
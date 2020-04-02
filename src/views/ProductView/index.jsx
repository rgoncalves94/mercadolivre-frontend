import React from 'react'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Breadcrumbs from '../../components/Breadcrumbs'
import ProductDetail from '../../components/ProductList/ProductDetail'

const product = {
    "author": {
        "name": "Vendedor",
        "lastname": "Mercado Livre"
    },
    "item": {
        "id": "MLB1348930369",
        "title": "Apple iPhone Xr Dual Sim 64 Gb Preto 3 Gb Ram",
        "categories": [
            "Celulares e Telefones",
            "Celulares e Smartphones"
        ],
        "price": {
            "currency": "BRL",
            "amount": 2999,
            "decimals": 0
        },
        "picture": "http://mlb-s2-p.mlstatic.com/811154-MLA31348359740_072019-O.jpg",
        "condition": "new",
        "free_shipping": false,
        "sold_quantity": 500,
        "description": "Nova tela e design compacto. \nO novo iPhone XR te leva para o futuro com o novo design de tela Liquid Retina HD de 6.1 polegadas. Nosso revolucionário display LCD é o mais avançado e oferece a mais alta precisão de cores da indústria. Tudo parece incrivelmente real. Disponível em um acabamento elegante, o Apple iPhone XR tem um design fino e compacto que se encaixa facilmente em uma mão. \n \nCâmeras para qualquer hora do dia. \nA câmera traseira de 12 megapixels captura imagens excelentes a qualquer hora do dia, enquanto a câmera frontal possui tecnologia TrueDepth que inclui sensores especiais e habilita o Face ID, permitindo que você tire as melhores selfies possíveis. \n \nGraças ao seu desempenho suave e eficiente, coloca o mundo ao seu alcance. \nÉ comandado por um chip Bionic A12 que executa todos os aplicativos e jogos sem problemas, sem um único atraso. \n \nSistema operacional iOS 12. \nEste celular vem com o sistema operacional iOS 12 pré-instalado, que consegue incluir uma ampla gama de recursos intuitivos para tornar sua vida digital muito mais fácil."
    }
}

function ProductView({ history, ...props}) {
    console.log(props)

    return (
        <React.Fragment>
            <Header />
            <Breadcrumbs crumbs={product.item.categories} />
            <Content>
                <ProductDetail product={product} />
            </Content>
        </React.Fragment>
    )
}

export default ProductView
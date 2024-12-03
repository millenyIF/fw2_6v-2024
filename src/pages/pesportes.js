import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import CardProd from "./cardprod";
export default function Pesportes({produtos}) {
    return <>
        <Menu />
        <Container className="border border-2 
    rounded border-primary col-sm-6 text-center">
            Lista de Produtos de Esportes
        </Container>
        <Container>
            <div className="row">
                {produtos.map(produto=>
                    <CardProd titulo={produto.titulo}
                    descricao={produto.descricao}
                    preco={produto.preco}
                    key={produto.id}/>
                )}
            </div>
        </Container>
        <Footer />
    </>
}
export async function getServerSideProps(){
    const res = await fetch('http://localhost:3000/api/produtos/data')
    const repo = await res.json()
    return { props: {produtos: repo}}
}
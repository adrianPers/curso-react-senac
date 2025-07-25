import Button from "../../components/Button";
import Header from "../../components/Header";
import Bio from "../../components/Bio";
import ListaHabilidade from "../../components/ListaHabilidade";
import "./perfil.css"
const Perfil = () => {
    return (
        <main>
            <Header />
            <Bio />
            <ListaHabilidade />
            <Button />
        </main>
    )
}

export default Perfil
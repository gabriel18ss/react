import { Link } from "react-router-dom";


export default function index() {
    return (
        <main>
        <h1>home</h1>

            <ul>
                <li> <Link to='/corprimaria'> Cor primaria</Link> </li>
                <li> <Link to='/frequencia'> Frequencia</Link> </li>
                <li> <Link to='/ingressos'> Ingresso</Link> </li>
                <li> <Link to='/maiornumero'> Maior numero</Link> </li>
            </ul>

        </main>
    )
}
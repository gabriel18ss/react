import { useState } from "react"

export default function index() {

    const [qtdint, setqtdint] = useState(0);
    const [qtdmeias, setqtdmeias] = useState(0);
    const [diasemana, setdiadasemana] = useState('');
    const [nacionalidade, setnacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressoCinema',
         {
         qtdinnt: qtdint,
         qtdmeeias: qtdmeias,
         diasemana: diasemana,
         nacionalidade: nacionalidade

         })

            setTotal(resp.data.total);

    }

    return (
        <main>
        <h1>ingresso</h1>

            <div> qtd. inteiros: <input type='text' value={qtdint} onChange={e =>setqtdint(Number(e.target.value))}/> </div>
            <div> qtd . meias: <input type='text' value={qtdmeias} onChange={e => setqtdmeias(Number(e.target.value))}/> </div>
            <div> dia da semana: < input type='text' value={diasemana} onChange={e => setdiadasemana(Number(e.target.value))}/></div>
            <div> nacionalidade: <input type='text' value={nacionalidade} onChange={e => setnacionalidade(Number(e.target.value))}/></div>

            <div>
                <button onClick={calcular}>calcular</button>
            </div>
            <div>
                o total é R$: {total}
            </div>
        </main>
    )
}
import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json()
        .then(data => console.log(data)))
    }, []);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="income">R$12.000</td>
                        <td>Serviço</td>
                        <td>18/01/2023</td>
                    </tr>
                    <tr>
                        <td>Lanche</td>
                        <td className="outcome">R$60</td>
                        <td>Alimentação</td>
                        <td>18/01/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
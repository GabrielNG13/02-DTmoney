import { Container } from "./styles";

export function TransactionTable() {
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
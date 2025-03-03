# Calculadora de Financiamento

Uma aplicação web para simular financiamentos imobiliários utilizando os sistemas de amortização SAC e PRICE.

## Funcionalidades

- Simulação de financiamento utilizando o sistema SAC (Sistema de Amortização Constante)
- Simulação de financiamento utilizando o sistema PRICE (Sistema Francês de Amortização)
- Cálculo de prestações, juros e amortizações
- Visualização da tabela completa de pagamentos

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute a aplicação:
   ```
   npm start
   ```
4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Sistemas de Amortização

### SAC (Sistema de Amortização Constante)

No sistema SAC, o valor da amortização é constante e o valor dos juros é decrescente, fazendo com que o valor da prestação seja decrescente ao longo do tempo.

### PRICE (Sistema Francês de Amortização)

No sistema PRICE, o valor da prestação é constante, mas a composição entre amortização e juros varia ao longo do tempo. No início, a maior parte da prestação é composta por juros, e ao final, a maior parte é composta por amortização.

## Parâmetros da Simulação

- **Valor Total**: Valor total do imóvel
- **Entrada**: Valor da entrada (pagamento inicial)
- **Taxa de Juros**: Taxa de juros anual
- **Prazo**: Prazo do financiamento em meses
# CalculadoraOnline

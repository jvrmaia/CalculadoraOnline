# Calculadora de Financiamento

Uma aplicação web para simular financiamentos imobiliários utilizando os sistemas de amortização SAC e PRICE.

## Deployment

Este projeto está configurado para ser implantado automaticamente no GitHub Pages usando GitHub Actions.

### Implantação Automática

Sempre que houver um push para a branch `main`, o GitHub Actions irá automaticamente:

1. Construir a aplicação React
2. Implantar a aplicação no GitHub Pages

O fluxo de trabalho está definido no arquivo `.github/workflows/deploy.yml`.

### Implantação Manual

Você também pode implantar manualmente a aplicação usando o comando:

```bash
cd calculadora-financiamento
npm run deploy
```

Este comando irá construir a aplicação e implantá-la no GitHub Pages usando o pacote `gh-pages`.

## Configuração do GitHub Pages

Para que a implantação funcione corretamente, você precisa:

1. Ir para as configurações do repositório no GitHub
2. Na seção "Pages", selecionar a fonte como "GitHub Actions"

## URL da Aplicação

Após a implantação, a aplicação estará disponível em:
https://jvrmaia.github.io/CalculadoraOnline/ 
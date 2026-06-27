# SISAVALIA

Sistema inicial para avaliacao imobiliaria por inferencia estatistica, orientado ao fluxo de laudos tecnicos do SisAvalia e aos requisitos da ABNT NBR 14653.

## Como abrir

Abra `index.html` no navegador.

## Publicacao no Render

O repositorio inclui `render.yaml` para criar um site estatico no Render. No painel do Render, use `New > Blueprint`, conecte o repositorio GitHub e confirme o servico `sisavalia-mma`. O diretorio publicado e a raiz do repositorio e nao ha comando de build.

## Escopo desta primeira versao

- Cadastro de Ordem de Servico.
- Cadastro completo e editavel do imovel avaliando, documentacao, terreno, edificacao, vistoria, mercado e conclusao.
- Cadastro manual de amostras de mercado.
- Importacao de amostras por CSV/TSV exportado do Excel.
- Regressao linear multipla sobre `ln(valor unitario)`.
- Selecao de variaveis independentes e transformacoes (`x`, `ln(x)`, `1/x`, `sqrt(x)`, `x²`).
- Diagnostico estatistico auxiliar: normalidade, outliers, multicolinearidade, significancia, micronumerosidade e status geral.
- Calculo de valor unitario, valor total, intervalo de confianca de 80% e graus estimados.
- Checklist inicial ABNT/SisAvalia.
- Revisao automatica do laudo com pendencias criticas, alertas tecnicos, conferencias manuais e atalhos de correcao.
- Previa completa e exportacao do laudo em PDF A4 ou HTML no template MMA, incluindo campos do modelo SisAvalia, resultados, diagnosticos, graficos, amostras e memoria de calculo.
- Gestao local de projetos com salvar, abrir, excluir e backup/importacao em JSON.

## Base documental lida

Os textos extraidos dos PDFs ficam em `tmp/pdfs/extracted/` para consulta durante o desenvolvimento.

## Proximos passos tecnicos

- Suporte direto a arquivos `.xlsx`.
- Ampliar as variaveis importadas: endereco, telefone, data, coordenadas, quartos, suites, vagas, idade e fotos.
- Implementar ART/RRT, anexos fotograficos e mapa/croqui.

## Importacao de amostras

Na secao `Amostras de Mercado`, use `Modelo CSV` para baixar uma planilha-base. O importador aceita CSV/TSV com as colunas:

- `fonte`
- `preco`
- `area`
- `local`
- `padrao`
- `conservacao`

Os campos `local`, `padrao` e `conservacao` aceitam notas `1`, `2` ou `3`, ou textos como `periferica`, `normal`, `central`, `baixo`, `medio`, `alto`, `regular`, `bom` e `novo`.

## Modelo inferencial

Na secao `Modelo Inferencial`, o painel `Variaveis e Transformacoes` permite ativar/desativar cada variavel independente e escolher a escala usada no modelo:

- `x`
- `ln(x)`
- `1/x`
- `sqrt(x)`
- `x²`

A variavel dependente permanece `ln(valor unitario)`, isto e, `ln(preco / area)`.

## Diagnostico estatistico

O painel `Diagnostico Estatistico` apresenta leitura auxiliar do modelo:

- normalidade dos residuos por faixas aproximadas de 68%, 90% e 95%;
- outliers por residuos padronizados acima de `|2|` e `|3|`;
- multicolinearidade por correlacoes entre variaveis independentes com `|r| >= 0,80`;
- significancia das variaveis por p-valor aproximado;
- micronumerosidade por minimos de grau I, II e III;
- diagnostico geral consolidado.

Esses indicadores apoiam a revisao tecnica, mas nao substituem a responsabilidade do avaliador.

## Revisao automatica do laudo

Na secao `Previa do Laudo`, o sistema consolida verificacoes cadastrais, coerencia de datas e areas, quantidade e identificacao das amostras, extrapolacao da area, enquadramento, poder explicativo, diagnosticos e validade do resultado. O parecer e atualizado durante o preenchimento e separa itens criticos, alertas e verificacoes que dependem do responsavel tecnico.

## Campos do laudo

Na secao `Imovel Avaliando`, os grupos expansiveis permitem editar os campos formais exibidos nas paginas do laudo. Alteracoes cadastrais e descritivas atualizam a previa sem apagar o modelo. Alteracoes em area construida, localizacao, padrao ou conservacao invalidam o resultado anterior e exigem novo calculo.

## Exportacao em PDF

O comando `Gerar PDF` executa a revisao automatica, bloqueia laudos com pendencias criticas e abre o dialogo de impressao com somente as 11 paginas do laudo. Selecione o destino `Salvar como PDF`; o papel A4, as margens zeradas, a paginacao e o template MMA sao aplicados automaticamente. O comando `Exportar HTML` permanece disponivel como copia digital independente.

## Projetos salvos

Na secao `Projetos Salvos`, informe um nome e use `Salvar projeto`. O armazenamento local preserva todos os campos, amostras e configuracoes do modelo neste navegador. O comando `Abrir` restaura o projeto e recalcula o modelo; `Exportar backup` gera um arquivo JSON, que pode ser recuperado por `Importar projeto` em outro navegador ou computador.

# Cartão de Crédito Válido

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

O validador de cartão é um dos primeiros projetos da turma SAP010 do bootcamp da Laboratória.

Sua função é verificar se um número de cartão é válido ou não quando o usuário insere no campo disponivel.

## 3. Protótipo

A ideia inicial era do usuário inserir todos os campos do cartão, conforme a imagem abaixo:

![Protótipo]([https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png](https://i.imgur.com/E3iJC9A.jpg)

Porém, para facilitar a experiência, o projeto final consiste em ter que inserir apenas o número do cartão.

## 4. Projeto final

https://fernanda-asouza.github.io/SAP010-card-validation/




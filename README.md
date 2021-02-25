# romannumber-parser

> Transforma números romanos em números inteiros e executa operações com eles.

## Intenção

Primeiramente treinar e praticar minhas habilidades com Typescript. Segundamente, facilitar possíveis soluções com números romanos.

## Libs

Este projeto não usa nenhuma lib em produção, apenas algumas para facilitar o desenvolvimento. [Mais informações](https://github.com/gepetojj/romannumber-parser/blob/main/package.json).

## Licença

MIT - [Mais informações](https://github.com/gepetojj/romannumber-parser/blob/main/LICENSE).

## Documentação

### (classe) Parser

Caracteres aceitos:

* I, V, X, L, C, D, M

#### (função) toArray

Exemplo: `new Parser().toArray("III")`  
Resposta: `["I", "I", "I"]`  

Transforma uma string com numeros romanos em uma lista.  
Argumentos:

* (string) stringToParse - Números romanos em string para serem tranformados em lista.

Retorna:

* (string[]) - Os números romanos passados em forma de lista.

#### (função) toString

Exemplo: `new Parser().toString(["I", "I", "I"])`  
Resposta: `"III"`

Transforma uma lista com numeros romanos em uma string.  
Argumentos:

* (string[]) arrayToConcat - Números romanos em lista para serem tranformados em string.

Retorna:

* (string) - Os números romanos passados em forma de lista.

#### (função) getValue

Exemplo: `new Parser().getValue("V")`  
Resposta: `5`

Retorna o valor de um número romano em números inteiros.  
Argumentos:

* (string) character - Número romanos em string para ser retornado seu valor.

Retorna:

* (number) - Valor do número romano passado em número inteiro.

#### (função) getValues

Exemplo: `new Parser().getValues(["I", "V", "V"])`  
Resposta: `9`

Retorna o valor em número inteiro de uma lista de números romanos.  
Argumentos:

* (string[]) arrayToGetValues - Números romanos em string para serm tranformados em lista.

Retorna:

* (number) - O valor da lista de números romanos passada em número inteiro.

#### (função) subtract

Exemplo: `new Parser().subtract(["V", "I", "I"], ["V"])`  
Resposta: `2`

Subtrai duas listas de números romanos.  
Argumentos:

* (string[]) arrayOne - Lista de números romanos.
* (string[]) arrayTwo - Lista de números romanos.

Retorna:

* (number) - Resultado da subtração.

#### (função) add

Exemplo: `new Parser().add(["V", "I", "I"], ["V"])`  
Resposta: `12`

Soma duas listas de números romanos.  
Argumentos:

* (string[]) arrayOne - Lista de números romanos.
* (string[]) arrayTwo - Lista de números romanos.

Retorna:

* (number) - Resultado da soma.

#### (função) multiply

Exemplo: `new Parser().multiply(["V", "I", "I"], ["V"])`  
Resposta: `35`

Multiplica duas listas de números romanos.  
Argumentos:

* (string[]) arrayOne - Lista de números romanos.
* (string[]) arrayTwo - Lista de números romanos.

Retorna:

* (number) - Resultado da multiplicação.

#### (função) divide

Exemplo: `new Parser().divide(["I", "X"], ["I", "I", "I"])`  
Resposta: `3`

Divide duas listas de números romanos.  
Argumentos:

* (string[]) arrayOne - Lista de números romanos.
* (string[]) arrayTwo - Lista de números romanos.

Retorna:

* (number) - Resultado da divisão.

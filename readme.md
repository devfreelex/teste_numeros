## Recuperar número único

Decidi criar uma estrutura que avalia uma lista de números repetidos e que encontra um número único dentro da lista.

Caso um número único não seja encontrado um objeto contendo informações da inspeção é retornado: 

```js
 {
    uniqueValue: null,
    listValue: [2, 3, 5, 3, 5],
    message: 'Todos os números são repetidos'
 }
```

Caso exista um número único, é retornado o seguinte objeto:

```js
 {
    uniqueValue: 2,
    listValue: [2, 3, 5, 3, 5],
    message: 'ok'
 }
```

### Estrutura

Decidi utilizar o padrão Factory em conjunto com algo semelhando ao padrão Builder para construir a fabrica de validadores de números.

Isso facilita a compreensão do código e a implementação de validações, já que é possível executar funções encadeadas, como abaixo:

```js
const uniqueFilter = uniqueFilterFactory()
const numberList = [3, 2, 1, 2, 3]

// Funções encadeadas
const result = uniqueFilter.setValues(numberList).inspect().getUniqueNumber()
```

O código acima produz a seguinte saída:


```js
 {
    uniqueValue: 1,
    listValue: [3, 2, 1, 2, 3],
    message: 'ok'
 }
```

O resultado é então armazenado em `result` e pode ser acessado da seguinte forma:

```js
    console.log(result.uniqueValue)
```

O código completo fica assim:

```js
const uniqueFilter = uniqueFilterFactory()
const numberList = [3, 2, 1, 2, 3]

// Funções encadeadas
const result = uniqueFilter.setValues(numberList).inspect().getUniqueNumber()
console.log(result.uniqueValue)
```


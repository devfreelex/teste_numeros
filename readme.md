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
uniqueFilter.setValues(numberList).inspect().getUniqueNumber()
```
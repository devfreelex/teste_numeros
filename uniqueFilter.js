const uniqueFilterFactory = () => {
    let numberList = []
    let result = null
    const counter = {}


    const setValues = (list) => {
        numberList = list.map(item => {
            if (typeof item === 'number') return item
            throw new Error('A lista informada contém valores que não são números e não pode ter.')
        })

        return { inspect }
    }

    const getUniqueNumber = () => {
        counterKeys = Object.keys(counter)
        const uniqueNumber = 1

        counterKeys.forEach(key => {
            if (counter[key].length <= uniqueNumber) {
                result = {
                    uniqueValue: parseInt(key),
                    listValue: [...numberList],
                    message: 'ok'
                }
                return
            }

            result = { uniqueValue: null, listValue: [...numberList], message: 'Todos os números estão repetidos' }
        })


        return result
    }

    const inspect = () => {
        const listValues = [...numberList]

        listValues.forEach((target, index) => {
            numberList.forEach((numberElement) => {
                if (numberElement === target && !counter[numberElement] && !Array.isArray(counter[numberElement])) {
                    counter[numberElement] = [index]
                    return
                }

                if (numberElement === target && counter[numberElement] && Array.isArray(counter[numberElement])) {
                    if (!counter[numberElement].some(counterElement => counterElement === index)) {
                        counter[numberElement] = [...counter[numberElement], index]
                    }
                }

            })
        })

        return {
            getUniqueNumber
        }

    }

    return {
        setValues,
        inspect,
        getUniqueNumber
    }
}

module.exports = uniqueFilterFactory
class ExchangeCurr{
    getData = (x, y) =>{
        return fetch(`https://api.exchangerate.host/convert?from=${y}&to=${x}`)
        .then((res) => res.json())
        .then((data) => data)
    }
}
export default ExchangeCurr
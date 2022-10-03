import axios from "axios";
import cron from "node-cron";

const apiUrl = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

const formatData = async () => {
    axios.get(apiUrl).then((res) => {
        let dollar = [res.data]
        const mapDolar = dollar.map(dataDoll => [{
            high_Value: `R$ ${dataDoll.USDBRL.high}`,
            lowest_Value: `R$ ${dataDoll.USDBRL.low}`,
            actual_Value: `R$ ${dataDoll.USDBRL.bid}`,
        }]);
        console.log (mapDolar[0])

    }).catch((err) => {
        console.log("Request Error", err);
    });
}

const sendData = () => {
    //ATUALIZARÁ A CADA 30 SEGUNDOS APARTIR DE MEIO DIA, QUE É QUANDO O MERCADO ABRE.
    cron.schedule('*/30 *  12/1 * * *', formatData, {
        scheduled: true
    })
}

export default sendData;
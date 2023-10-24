import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyBMXxvyU5rEXA_gZGqBZ8BHYcsmKuTcSeY',
    cx: '361522ea5fbbf42eb',
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
import {getBaseUrl} from './params';
async function getApiProducts(){
    console.log(getBaseUrl())
    let data = await fetch(`${getBaseUrl()}/products?offset=0&limit=100`).then(res=>res.json())
    return data
}
export default getApiProducts;
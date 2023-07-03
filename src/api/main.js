import {getBaseUrl} from './params';
async function getApiProducts(){
    console.log(getBaseUrl())
    let data = await fetch(`${getBaseUrl()}/products?offset=0&limit=100`).then(res=>res.json())
    return data
}

async function getApiProduct(id){
    let data = await fetch($`${getBaseUrl()}/products/${id}`)
    return data
}
async function get
export default getApiProducts;
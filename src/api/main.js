import {getBaseUrl} from './params';
export async function getApiProducts(){
    console.log(getBaseUrl())
    let data = await fetch(`${getBaseUrl()}/products?offset=0&limit=100`).then(res=>res.json())
    return data
}

export async function getApiProduct(id){
    let data = await fetch(`${getBaseUrl()}/products/${id}`).then(res=>res.json())
    return data
}

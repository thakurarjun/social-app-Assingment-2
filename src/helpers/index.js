import SecureLS from "secure-ls";

let ls = new SecureLS();

export function setToLocalStorage(key,data){
    ls.set(key,data)
}

export function getFromLocalStorage(key){
    let getData = ls.get(key)
    return getData;
}

export function removeFromLocalStorage(key){
    ls.remove(key)
}

export function removeAllFromLocalStorage(key){
    ls.removeAll()
}

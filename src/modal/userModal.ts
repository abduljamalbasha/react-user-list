
export interface UserInfo {
    id: number,
    name: string,
    username: string,
    email: string
    address:Address 
    phone: string,
    website: string,
    company: company
}

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

type Geo = {
    lat:string
    lng:string
}

type company = {
    name: string,
    catchPhrase: string
    bs:string
}
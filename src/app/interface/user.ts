import { Role } from "./role"
export interface User {
    id: number
    name: string
    username: string
    password: string
    roles: Role[]
    image :String
    lastname:String
    email:String
    adresse:String
    city:String
     country: String
  }
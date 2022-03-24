import { Role } from "./role"
export interface user {
    id: number
    name: string
    username: string
    password: string
    roles: Role[]
  }
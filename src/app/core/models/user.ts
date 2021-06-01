export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    date?:Date,
    userType?:string
}

// export enum UserType {
//     ADMIN = "Admin",
//     CASHIER = "Caissier",
//     DELIVERYGUY = "Livreur",
//     CLIENT = "Client"
// }
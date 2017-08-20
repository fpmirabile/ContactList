import { IPhone, IAddress } from './index'

export interface IContact {
    name: string,
    id: number,
    companyName: string,
    isFavorite: boolean,
    smallImageURL: string,
    largeImageURL: string,
    emailAddress: string,
    birthdate: Date,
    phone: IPhone,
    address: IAddress
};
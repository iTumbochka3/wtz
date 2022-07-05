export interface UserInterface {
    id: string,
    name: string,
    instagram_username: string,
    profile_image: {
        small: string,
        medium: string,
        large: string,
    },
}


export class Product {

    id: string;
    imageUrl: string;
    price: number;
    user?: UserInterface;

    private minPrice = 1000;
    private maxPrice = 60000;

    constructor(id: string, imageUrl: string, user?: UserInterface) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.price = Math.floor(Math.random() * (this.maxPrice - this.minPrice + 1)) + this.minPrice;
        this.user = user;
    }
}
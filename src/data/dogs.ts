export interface Dog {
    id: number;
    name: string;
    image: string;
    breed: string;
    description: string;
}

export const dogs: Dog[] = [
    {
        id: 1,
        name: "Corgi",
        image: "https://zoo.dp.ua/wp-content/uploads/2017/12/velsh-korgi.jpg",
        breed: "Corgi",
        description: "Corgi - the best dog in the world!",
    },
    {
        id: 2,
        name: "Husky",
        image: "https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg",
        breed: "Siberian Husky",
        description: "Siberian Huskies are strong, hard-working sled dogs.",
    },
];

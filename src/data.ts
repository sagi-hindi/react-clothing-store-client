import { CategoryModel } from "./models/category.model";
import { ProductModel } from "./models/product.model";

export const categories:CategoryModel[] = [
    {
        _id: "1",
        img: "t-shirts.jpg",
        title: "SHIRTS STYLE",
        category:'t-shirt'
    },
    {
        _id: "2",
        img: "LOUNGEWEAR.jpg",
        title: "LOUNGEWEAR",
        category:'dress'

    },
    {
        _id: "3",
        img: "JACKETS.jpg",
        title: "LIGHT JACKETS",
        category:'jacket'

    },
];

export const popularProducts:ProductModel[] =[
    {
        _id: "1",
        imageName: "t-shirts-1.png"
    },
    {
        _id: "2",
        imageName: "t-shirts-3.png",
    },
    {
        _id: "3",
        imageName: "jacket-1.png",
    },
    {
        _id: "4",
        imageName: "dress-2.png",
    },
    {
        _id: "5",
        imageName: "jacket-2.png",
    },
    {
        _id: "6",
        imageName: "dress-1.png",
    },
    {
        _id: "7",
        imageName: "t-shirts-4.png",
    },
    {
        _id: "8",
        imageName: "t-shirts-5.png",
    },

]




export class ProductModel {
   _id: string ;
   title?: string;
   desc?: string;
   image?: FileList;
   imageName: string;
   categories?: string[];
   size?: string[];
   color?: string[];
   price?: number;
   inStock?: boolean;
   createdAt?: Date;
   quantity?: number;
}
export class CartModel {
   _id?: string ;
   title?: string;
   desc?: string;
   imageName: string;
   size?: string;
   color?: string;
   price?: number;
   quantity?: number;

   constructor(_id:string, quantity?: number, size?: string, color?: string, price?: number) {
         this._id = _id;
         this.quantity = quantity;
         this.size = size;
         this.color = color;
         this.price = price;
      }
}
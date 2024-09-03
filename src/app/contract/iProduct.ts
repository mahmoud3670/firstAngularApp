export class iProduct{
  id:number;
  title: string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:iRating
}
export class iRating{
  rate:number;
  count:number;
}

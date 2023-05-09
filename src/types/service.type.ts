import { StaticImageData } from 'next/image';

export interface IService {
  id: string;
  images: StaticImageData;
  title: string;
  description: string;
  price: number;
}

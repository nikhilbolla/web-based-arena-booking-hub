'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { MdOutlineSportsCricket } from "react-icons/md";
import { CiFootball } from "react-icons/ci";
import { IoGolfOutline } from "react-icons/io5";
import { GiTennisRacket } from "react-icons/gi";
import { CiBasketball } from "react-icons/ci";

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Cricket',
    icon: MdOutlineSportsCricket,
    description: 'Playground for Playing Cricket!',
  },
  {
    label: 'Football',
    icon: CiFootball,
    description: 'Playground for Playing Foot Ball!'
  },
  {
    label: 'Tennis',
    icon: GiTennisRacket,
    description: 'Playground for Playing Tennis!'
  },
  {
    label: 'Basketball',
    icon: CiBasketball,
    description: 'Playground for Playing BasketBall!'
  },
    {
    label: 'Golf',
    icon: IoGolfOutline,
    description: 'Playground for Playing Golf!'
  }
  
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;
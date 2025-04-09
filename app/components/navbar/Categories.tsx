'use client'

import Container from "../Container";

import { IoDiamond } from "react-icons/io5";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaCampground, FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";

export const categories = [
    {
        label: 'Урц',
        icon: FaCampground,
        description: 'This property is luxurious!'
    },
    {
        label: 'Орон сууц',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Орон нутаг',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Далайн эрэг',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Салхин тээрэм',
        icon: GiWindmill,
        description: 'This property has windmills!'
    },

    {
        label: 'Усан сан',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Арал',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Нуур',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Цайз',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Зуслан',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    },
    {
        label: 'Арктик',
        icon: BsSnow,
        description: 'This property has camping activities!'
    },
    {
        label: 'Агуй',
        icon: GiCaveEntrance,
        description: 'This property is in a cave!'
    },
    {
        label: 'Цөл',
        icon: GiCactus,
        description: 'This property is in the desert!'
    },
    {
        label: 'Амбаар',
        icon: GiBarn,
        description: 'This property is in the barn!'
    },
    {
        label: 'Цанаар гулгах',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    
    
    









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
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}/>
                ))}
            </div>
        </Container>
    );
}
 
export default Categories;
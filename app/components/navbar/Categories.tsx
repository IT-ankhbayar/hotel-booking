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
        description: 'Орчин үеийн!'
    },
    {
        label: 'Орон нутаг',
        icon: TbMountain,
        description: 'Орон нутагт байршилтай!'
    },
    {
        label: 'Далайн эрэг',
        icon: TbBeach,
        description: 'Далайн эрэгтэй ойролцоо!'
    },
    {
        label: 'Салхин тээрэм',
        icon: GiWindmill,
        description: 'Салхин тээрэмд ч амьдрах боломжтой!'
    },

    {
        label: 'Усан сан',
        icon: TbPool,
        description: 'Усан сантай хаус!'
    },
    {
        label: 'Арал',
        icon: GiIsland,
        description: 'Арал дээр байршилтай!'
    },
    {
        label: 'Нуур',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Цайз',
        icon: GiCastle,
        description: 'Цайз дотор ч амьдрах боломжтой!'
    },
    {
        label: 'Зуслан',
        icon: GiForestCamp,
        description: 'Та кемпинг хийх боломжтой!'
    },
    {
        label: 'Арктик',
        icon: BsSnow,
        description: 'This property has camping activities!'
    },
    {
        label: 'Агуй',
        icon: GiCaveEntrance,
        description: 'Агуй дотор байршилтай!'
    },
    {
        label: 'Цөл',
        icon: GiCactus,
        description: 'Цөл дунд байршилтай!'
    },
    {
        label: 'Амбаар',
        icon: GiBarn,
        description: 'Амбаар!'
    },
    {
        label: 'Цанаар гулгах',
        icon: FaSkiing,
        description: 'Та цанаар гулгах боломжтой!'
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
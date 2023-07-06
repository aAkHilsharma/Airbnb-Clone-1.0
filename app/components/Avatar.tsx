'use client'
import Image from 'next/image';
import {BiSolidUserCircle} from 'react-icons/bi';

interface AvatarProps {
    src?: string | null | undefined
};
const Avatar:React.FC<AvatarProps> = ({
    src
}) => {
  return (    
        src ? 
        <Image src={src} width={30} height={30} alt='Avatar' className='rounded-full' /> :
        <BiSolidUserCircle 
            className='text-gray-400 h-[24px] w-[24px]'
        />
    )
}

export default Avatar
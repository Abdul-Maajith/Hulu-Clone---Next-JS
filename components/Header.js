import Image from "next/image"
import HeaderItems from "../components/HeaderItems"
import {
   BadgeCheckIcon, 
   CollectionIcon, 
   HomeIcon, 
   LightningBoltIcon, 
   SearchIcon, 
   UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">

            <div className="flex flex-grow justify-evenly max-w-2xl items-center">
               <HeaderItems title="Home" Icon={HomeIcon}/>
               <HeaderItems title="Trending" Icon={LightningBoltIcon}/>
               <HeaderItems title="Verified" Icon={BadgeCheckIcon}/>
               <HeaderItems title="Collections" Icon={CollectionIcon}/>
               <HeaderItems title="Search" Icon={SearchIcon}/>
               <HeaderItems title="Accounts" Icon={UserIcon}/>
            </div>

            {/* Next.js Built in image tag! Also we need to configure it to next.config.js*/}
            <Image 
              className= "object-contain"
              src="https://links.papareact.com/ua6"
              width={200}
              height={100}
            />

        </header>
    )
}

export default Header

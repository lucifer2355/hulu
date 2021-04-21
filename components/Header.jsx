import React from "react";
import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header>
      <div>
        <HeaderItem title='HOME' Icon={HomeIcon} />
      </div>
      <Image src='https://links.papareact.com/ua6' width={200} height={100} />
    </header>
  );
};

export default Header;

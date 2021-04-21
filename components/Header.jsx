import React from "react";
import Image from "next/image";

import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header>
      <h1>This is Header</h1>

      <div>
        <HeaderItem title='HOME' />
      </div>
      <Image src='https://links.papareact.com/ua6' width={200} height={100} />
    </header>
  );
};

export default Header;

import React from "react";

import Image from "next/image";

import { getImagePath } from "../utils/imagePath";

const contentData = [
    {
      heading: 'Skateboards',
      discount: '-20%',
      imagePath: 'skateboardFront.png',
    },
    {
      heading: 'Roller Skates',
      discount: '-15%',
      imagePath: 'RollerSkates.png',
    },
    {
      heading: 'Bicycles',
      discount: '-18%',
      imagePath: 'BycicleDiagonal.png',
    },
  ];

const VertModal: React.FC = ({}) => {

    return (
        <div className="flex flex-row items-stretch justify-stretch w-full h-auto">
            {contentData.map((item, index) => (
                <div key={index} className="flex flex-col w-1/3 h-auto px-2 border-2 border-black">
                    <div className="flex flex-col items-center justify-center w-full h-auto text-center text-sm sm:text-lg md:text-2xl lg:text-4xl">
                        <h3 className="font-bold">
                            {item.heading}
                        </h3>
                        <h3 className="italic">
                            {item.discount}
                        </h3>
                    </div>
                    <div className="w-full h-auto">
                        <Image
                        src={getImagePath(item.imagePath)}
                        alt={`Image for ${item.heading}`}
                        width={128}
                        height={128}
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>
            ))}
        </div>
    );

};

export default VertModal;

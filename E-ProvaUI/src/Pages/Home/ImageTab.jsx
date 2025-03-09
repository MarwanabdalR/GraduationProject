// Abdalrady
import { useState } from "react";
import { motion } from "framer-motion";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

export default function ImageTab() {
  const [activeTab, setActiveTab] = useState("men");
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleTabClick = (tab) => setActiveTab(tab);
  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  const renderTabContent = (tab) => {
    const items = tab === "men"
      ? [
          { name: "Leather", imgSrc: "https://imagescdn.simons.ca/images/20126-25101-20-A1_2/retro-faux-leather-jacket.jpg?__=4" },
          { name: "T-Shirt", imgSrc: "https://dfcdn.defacto.com.tr/376/D9846AX_25SP_ER105_01_01.jpg" },
          { name: "Jacket", imgSrc: "https://www.psychobunny.com/cdn/shop/files/B6N338E200-BLK_2.webp?v=1737037092&width=650" },
        ]
      : [
          { name: "Skirts", imgSrc: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd74cb9bf/original/90_1019790-1A14124_5N620_14_WildRosesSatinMidiSkirt-Skirts-Versace-online-store_0_2.jpg?sw=550&q=85&strip=true" },
          { name: "Glasses", imgSrc: "https://ae01.alicdn.com/kf/Sbbc23d26174044fc9b76362a0e489f00C.jpg" },
          { name: "Dress", imgSrc: "https://images.riverisland.com/image/upload/t_ProductImagePortraitSmall/f_auto/q_auto/916311_rollover?_a=BATAV5AA0" },
        ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={item.name} className="relative flex justify-center items-end">
            <motion.img
              src={item.imgSrc}
              alt={item.name}
              className="w-full object-contain"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <button
              className="absolute mb-5 bg-white text-black font-semibold text-sm px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
              {hoveredItem === item.name ? (
                <GoArrowRight className="inline-block ml-2" />
              ) : (
                <GoArrowUpRight className="inline-block ml-2" />
              )}
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Fade triggerOnce>
        <div className="uppercase flex gap-10 justify-center">
          <button
            className={`border-black transition-all font-bold ${activeTab === "men" ? "border-t-2" : ""}`}
            onClick={() => handleTabClick("men")}
          >
            Shop Men
          </button>
          <button
            className={`border-black transition-all font-bold ${activeTab === "women" ? "border-t-2" : ""}`}
            onClick={() => handleTabClick("women")}
          >
            Shop Women
          </button>
        </div>
        <div className="mt-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: activeTab === "men" ? 0 : 0.5 }}
          >
            {renderTabContent(activeTab)}
          </motion.div>
        </div>
      </Fade>
    </div>
  );
}

import { Link } from "react-router-dom";
const CollectionCard = ({ title, image, anchor}) => {
    return (
        <div className="mb-[30px] px-[15px]">
        <div className="text-center block">
          <Link href={anchor} className={`text-[#181818] hover:text-[#e94328]`}>
            <img
              src={image}
              alt={title}
              className="max-w-full align-middle overflow-clip [overflow-clip-margin:content-box]"
            />
            <div className="block">
              <div className="uppercase font-sans font-bold text-base mt-[15px]">{title}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  };
  
  export default CollectionCard;
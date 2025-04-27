import { Link } from "react-router-dom";
import {CollectionData} from '../Categories/CollectionData';
import CollectionCard from '../Categories/CollectionCard';
export default function Categories() {
  return (
    <div className="overflow-hidden block">
      <section className="relative mb-10 lg:mb-52 md:mt-32">
        <div className="relative block">
          <h1 className=" text-center font-sans font-semibold text-2xl uppercase text-[#181818] mb-1 relative leading-normal block md:text-3xl">
            Collections
          </h1>
          <ol className="justify-center bg-white m-0 p-0 relative z-0 flex flex-wrap list-none rounded">
            <li className="mr-3.5 pr-2.5 relative  before:w-1 before:h-1 before:rotate-45 before:absolute before:-right-1 before:top-1/2 before:rounded-sm before:bg-[#222]">
              <Link
                to="/e-prova/home"
                className=" text-xs font-light text-[#222]"
              >
                Home
              </Link>
            </li>
            <li className="inline-block">
              <span className=" text-xs font-medium text-[#222]">
                Collections
              </span>
            </li>
          </ol>
        </div>
      </section>

      <div className="mt-[60px] block">
        <div className="w-full px-[15px] mx-auto">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {CollectionData.map((item) => (
                <CollectionCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

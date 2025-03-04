import "./home.css";
import { WiAlien } from "react-icons/wi";
import { TbPointFilled } from "react-icons/tb";
import { Zoom } from "react-awesome-reveal";

export default function ScrollBar() {
  return (
    <div>
      <Zoom direction="up" cascade triggerOnce>
        <div className="overflow-hidden h-6 w-full bg-white my-4 -mx-3">
          <div className="whitespace-nowrap animate-marquee flex gap-10">
            <div>
              <WiAlien size={25} className="inline-block" />
              <p className="inline-block font-semibold uppercase text-xs">
                Free shipping on all US order or order above $200
              </p>
              <TbPointFilled size={25} className="inline-block" />
            </div>
            <div>
              <WiAlien size={25} className="inline-block" />
              <p className="inline-block font-semibold uppercase text-xs">
                Free shipping on all US order or order above $200
              </p>
              <TbPointFilled size={25} className="inline-block" />
            </div>
            <div>
              <WiAlien size={25} className="inline-block" />
              <p className="inline-block font-semibold uppercase text-xs">
                Free shipping on all US order or order above $200
              </p>
              <TbPointFilled size={25} className="inline-block" />
            </div>
            <div>
              <WiAlien size={25} className="inline-block" />
              <p className="inline-block font-semibold uppercase text-xs">
                Free shipping on all US order or order above $200
              </p>
              <TbPointFilled size={25} className="inline-block" />
            </div>
            <div>
              <WiAlien size={25} className="inline-block" />
              <p className="inline-block font-semibold uppercase text-xs">
                Free shipping on all US order or order above $200
              </p>
              <TbPointFilled size={25} className="inline-block" />
            </div>
            <div>
              <WiAlien size={25} className="inline-block" />
              <p className="inline-block font-semibold uppercase text-xs">
                Free shipping on all US order or order above $200
              </p>
              <TbPointFilled size={25} className="inline-block" />
            </div>
            <div>
              <WiAlien size={25} className="inline-block" />
              <p className="inline-block font-semibold uppercase text-xs">
                Free shipping on all US order or order above $200
              </p>
              <TbPointFilled size={25} className="inline-block" />
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

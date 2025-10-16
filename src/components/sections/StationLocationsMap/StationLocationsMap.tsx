import { MapPin } from "lucide-react";

export interface StationLocationsMapProps {
  title?: string;
}

function StationLocationsMap({ title = "مواقع محطات بترولايف" }: StationLocationsMapProps) {
  return (
    <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm lg:col-span-2">
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-1.5">
          <h3 className="relative text-right h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
            {title}
          </h3>
          <MapPin className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      <div className="h-48 rounded-lg overflow-hidden relative min-h-[347px]">
        <img
          src="/img/vector-map.svg"
          alt="World map with Petrolife station locations"
          className="w-full h-full object-cover"
        />

        {/* Map Markers with Animated Ripple Effect */}
        {/* Marker 1 */}
        <div className="absolute top-[83.20%] left-[86.43%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 2 */}
        <div className="absolute top-[86.89%] left-[93.55%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 3 */}
        <div className="absolute top-[32.17%] left-[12.70%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 4 */}
        <div className="absolute top-[41.80%] left-[15.43%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 5 */}
        <div className="absolute top-[19.88%] left-[50.88%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 6 */}
        <div className="absolute top-[45.90%] left-[66.21%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 7 */}
        <div className="absolute top-[40.78%] left-[82.32%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 8 */}
        <div className="absolute top-[14.96%] left-[56.74%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>

        {/* Marker 9 */}
        <div className="absolute top-[36.07%] left-[50.10%]">
          <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
          <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
          <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />
        </div>
      </div>
    </div>
  );
}

export default StationLocationsMap;

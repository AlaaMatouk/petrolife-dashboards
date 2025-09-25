import { Fuel, MapPin } from "lucide-react";
import React, { useState } from "react";

interface MapMarker {
  id: string;
  top: string;
  left: string;
  hasTooltip?: boolean;
  tooltipData?: {
    flag: string;
    title: string;
    address: string;
  };
}

export const Map = (): JSX.Element => {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const mapMarkers: MapMarker[] = [
    {
      id: "marker-1",
      top: "83.20%",
      left: "86.43%",
      hasTooltip: true,
      tooltipData: {
        flag: "/img/au.svg",
        title: "Melbourne, AUS",
        address: "100 Smith Street\nCollingwood VIC 3066 AU",
      },
    },
    {
      id: "marker-2",
      top: "86.89%",
      left: "93.55%",
    },
    {
      id: "marker-3",
      top: "32.17%",
      left: "12.70%",
    },
    {
      id: "marker-4",
      top: "41.80%",
      left: "15.43%",
    },
    {
      id: "marker-5",
      top: "19.88%",
      left: "50.88%",
    },
    {
      id: "marker-6",
      top: "45.90%",
      left: "66.21%",
    },
    {
      id: "marker-7",
      top: "40.78%",
      left: "82.32%",
    },
    {
      id: "marker-8",
      top: "14.96%",
      left: "56.74%",
    },
    {
      id: "marker-9",
      top: "36.07%",
      left: "50.10%",
    },
  ];

  const handleMarkerClick = (markerId: string) => {
    setActiveMarker(activeMarker === markerId ? null : markerId);
  };

  const renderMapMarker = (marker: MapMarker) => {
    const isActive = activeMarker === marker.id;
    const isFirstMarker = marker.id === "marker-1";

    return (
      <div
        key={marker.id}
        className={`absolute w-[3.91%] h-[8.20%] rounded-[27.24px] cursor-pointer`}
        style={{ top: marker.top, left: marker.left }}
        onClick={() => handleMarkerClick(marker.id)}
        role="button"
        tabIndex={0}
        aria-label={`Map marker ${marker.id}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleMarkerClick(marker.id);
          }
        }}
      >
        <div className="absolute top-[calc(50.00%_-_23px)] left-[calc(50.00%_-_23px)] w-[47px] h-[47px] bg-primary-500 rounded-[27.24px] opacity-10" />
        <div className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_14px)] w-[27px] h-[27px] bg-primary-500 rounded-[27.24px] opacity-20" />
        <div className="absolute top-[calc(50.00%_-_4px)] left-[calc(50.00%_-_4px)] w-2 h-2 bg-primary-500 rounded-[27.24px]" />

        {isFirstMarker && (
          <img
            className="absolute w-[50.00%] h-[50.00%] top-[-10276.74%] left-[-3475.97%]"
            alt="Cursor"
            src="/img/cursor.svg"
          />
        )}

        {marker.hasTooltip &&
          marker.tooltipData &&
          (isActive || isFirstMarker) && (
            <div className="inline-flex flex-col items-center absolute left-[calc(50.00%_-_375px)] bottom-[51px] rounded-[7.78px] shadow-[var(--shadow-lg)]">
              <div className="inline-flex flex-col items-center gap-[7.78px] px-[15.57px] py-[11.68px] relative flex-[0_0_auto] bg-white rounded-[7.78px]">
                <img
                  className="relative w-[19.46px] h-[19.46px]"
                  alt="Flag"
                  src={marker.tooltipData.flag}
                />

                <div className="inline-flex flex-col items-center gap-[3.89px] relative flex-[0_0_auto] rounded-[7.78px]">
                  <div className="relative w-fit mt-[-0.97px] font-inter font-medium text-gray-700 text-[11.7px] text-center tracking-[0] leading-[17.5px] whitespace-nowrap">
                    {marker.tooltipData.title}
                  </div>

                  <p className="relative w-fit font-inter font-normal text-gray-500 text-[11.7px] text-center tracking-[0] leading-[17.5px]">
                    {marker.tooltipData.address
                      .split("\n")
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index <
                            marker.tooltipData!.address.split("\n").length -
                              1 && <br />}
                        </React.Fragment>
                      ))}
                  </p>
                </div>
              </div>

              <div className="relative w-[15.57px] h-[5.84px]">
                <img
                  className="absolute left-[calc(50.00%_-_1105px)] bottom-[4014px] w-3 h-3"
                  alt="Bottom center"
                  src="/img/bottom-center.svg"
                />
              </div>
            </div>
          )}
      </div>
    );
  };

  return (
    <section
      className="mb-5 h-[359px] flex flex-col bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] overflow-hidden border-[0.3px] border-solid border-[color:var(--color-mode-text-icons-t-placeholder)]"
      data-model-id="1:7883"
      role="region"
      aria-label="Petrolife stations map"
    >
      <header className="text-right inline-flex ml-[700px]  h-5 relative mt-[27px] items-center gap-1.5">
        <h1 className="relative text-right h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
          مواقع محطات بترولايف
        </h1>
        <MapPin className="w-5 h-5 text-gray-500" />
      </header>

      <div
        className="ml-10 w-[996.38px] h-[474.84px] relative"
        role="img"
        aria-label="World map with Petrolife station locations"
      >
        <img
          className="absolute w-full h-full top-0 left-0"
          alt="Vector map"
          src="/img/vector-map.svg"
        />

        {mapMarkers.map(renderMapMarker)}
      </div>
    </section>
  );
};

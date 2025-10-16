import { CarListSection } from "./sections/CarListSection/CarListSection";
import { useLayoutContext } from "../../hooks/useLayoutContext";

export const Cars = (): JSX.Element => {
  const { searchQuery } = useLayoutContext();

  return (
    <div className="flex flex-col w-full items-start gap-5 ">
      <CarListSection searchQuery={searchQuery} />
    </div>
  );
};

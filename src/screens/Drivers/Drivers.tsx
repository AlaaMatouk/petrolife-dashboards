import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { useLayoutContext } from "../../hooks/useLayoutContext";

export const Drivers = (): JSX.Element => {
  const { searchQuery } = useLayoutContext();

  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DataTableSection searchQuery={searchQuery} />
    </div>
  );
};

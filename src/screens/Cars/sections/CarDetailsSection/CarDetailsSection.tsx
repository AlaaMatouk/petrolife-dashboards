import Header from "../../../../components/Header";
import SearchBar from "../../../../components/SearchBar";

export const CarDetailsSection = (): JSX.Element => {
  const carsNavigationIcons = [
    { id: 1, src: "/img/component-1.svg", alt: "Component" },
    { id: 2, src: "/img/component-1-1.svg", alt: "Component" },
    {
      id: 3,
      vectors: [
        { src: "/img/vector.svg", className: "absolute w-5 h-5 top-1 left-1" },
        {
          src: "/img/vector-1.svg",
          className: "absolute w-5 h-5 top-0 left-0",
        },
      ],
    },
    { id: 4, text: "En" },
  ];

  return (
    <Header
      title="السيــــــــــــــارات"
      titleIconSrc="/img/side-icons.svg"
      navigationIcons={carsNavigationIcons}
      extraContent={<SearchBar />}
    />
  );
};

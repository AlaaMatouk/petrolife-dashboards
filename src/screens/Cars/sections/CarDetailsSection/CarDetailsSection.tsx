import { Header } from "../../../../components/shared";

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

  const handleWalletClick = () => {
    console.log("Wallet clicked");
  };

  return (
    <Header
      title="السيــــــــــــــارات"
      titleIconSrc="/img/side-icons.svg"
      navigationIcons={carsNavigationIcons}
      showSearch={true}
      searchProps={{
        placeholder: "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف",
        onSearch: (query) => console.log("Search:", query),
      }}
      walletButton={{
        label: "محفظــــــــــــــتي",
        iconSrc: "/img/side-icons.svg",
        onClick: handleWalletClick,
      }}
    />
  );
};

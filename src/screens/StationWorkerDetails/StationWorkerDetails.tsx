import React from 'react'
import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple'
import { serviceDistributerNavigationMenuData, userInfo } from '../../constants/data'
import { UserRound } from 'lucide-react'

//TODO: Create the StationWorkerDetails component

function StationWorkerDetails() {
  return (
    <LayoutSimple
      headerProps={{
        title: "عمال المحطات",
        titleIconSrc: <UserRound className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: serviceDistributerNavigationMenuData.sections,
        topItems: serviceDistributerNavigationMenuData.topItems,
        bottomItems: serviceDistributerNavigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
    <div>StationWorkerDetails HOLAAAAA</div>
    </LayoutSimple>
  )
}

export default StationWorkerDetails
export interface FuelItem {
  type: string;
  amount: string;
  color: string;
}

export interface Category {
  name: string;
  count: number;
}

export interface StatItem {
  title: string;
  icon: React.ReactNode;
  type?: string;
  value?: string;
  content?: FuelItem[];
  amount?: string;
  currency?: string;
  unit?: string;
  categories?: Category[];
  cost?: string;
  replaced?: string;
  requested?: string;
  breakdown?: FuelItem[];
  total?: string;
  completed?: number;
  cancelled?: number;
  active?: number;
  inactive?: number;
}

export interface FuelConsumptionByCitiesSectionProps {
  statsData: StatItem[];
}

export default function FuelConsumptionByCitiesSection({ statsData }: FuelConsumptionByCitiesSectionProps) {
  
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="relative w-full h-[120px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder p-6 flex flex-col justify-between"
          >
            {/* Upper row - title */}
            <div className="flex justify-end mb-4">
              <span className="text-base text-color-mode-text-icons-t-sec">
                {stat.title}
              </span>
            </div>
            
            {/* Lower row - value and icon */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF3F9' }}>
                {stat.icon}
              </div>
              
              {stat.value ? (
                <p className="text-2xl text-color-mode-text-icons-t-blue font-bold">
                  {stat.value}
                </p>
              ) : stat.type === "fuel" ? (
                <div className="flex items-center gap-4">
                  {stat.content?.map((fuel, fuelIndex) => (
                    <div key={fuelIndex} className="flex items-center gap-4">
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                          {fuel.amount}
                        </span>
                        <span className={`${fuel.color} text-xs`}>{fuel.type}</span>
                      </div>
                      {fuelIndex < (stat.content?.length || 0) - 1 && (
                        <div className="w-px h-8 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : stat.categories ? (
                <div className="flex items-center gap-4">
                  {stat.categories.map((category, catIndex) => (
                    <div key={catIndex} className="flex items-center gap-4">
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                          {category.count}
                        </span>
                        <span className="text-xs text-color-mode-text-icons-t-sec">{category.name}</span>
                      </div>
                      {catIndex < (stat.categories?.length || 0) - 1 && (
                        <div className="w-px h-8 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : stat.breakdown ? (
                <div className="flex items-center gap-4">
                  {stat.breakdown.map((fuel, fuelIndex) => (
                    <div key={fuelIndex} className="flex items-center gap-4">
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                          {fuel.amount}
                        </span>
                        <span className={`${fuel.color} text-xs`}>{fuel.type}</span>
                      </div>
                      {fuelIndex < (stat.breakdown?.length || 0) - 1 && (
                        <div className="w-px h-8 bg-gray-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : stat.cost ? (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                      {stat.cost}
                    </span>
                    <span className="text-xs text-color-mode-text-icons-t-sec">التكلفة</span>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                      {stat.replaced}
                    </span>
                    <span className="text-xs text-color-mode-text-icons-t-sec">مستبدلة</span>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                      {stat.requested}
                    </span>
                    <span className="text-xs text-color-mode-text-icons-t-sec">طلب</span>
                  </div>
                </div>
              ) : stat.completed ? (
                <p className="text-2xl text-color-mode-text-icons-t-blue font-bold">
                  <span className="text-red-500">{stat.cancelled}</span>
                  <span className="text-gray-400 mx-1">/</span>
                  <span className="text-blue-600">{stat.completed}</span>
                </p>
              ) : stat.active ? (
                <p className="text-2xl text-color-mode-text-icons-t-blue font-bold">
                  <span className="text-red-500">{stat.inactive}</span>
                  <span className="text-gray-400 mx-1">/</span>
                  <span className="text-blue-600">{stat.active}</span>
                </p>
              ) : (
                <p className="text-2xl text-color-mode-text-icons-t-blue font-bold">
                  {stat.amount} <span className="text-base">{stat.currency || stat.unit}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    );
  };
  
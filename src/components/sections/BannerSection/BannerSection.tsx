export default function BannerSection() {
    return (
      <section className="w-full mb-8">
        <div className="relative w-full h-48 rounded-2xl overflow-hidden" style={{ backgroundColor: '#311159' }}>
          {/* Content */}
          <div className="relative z-10 flex items-center h-full pl-0 pr-8">
            {/* Left Side - Image */}
            <div className="flex-shrink-0 mr-8 h-full flex items-center">
              <img 
                src="/img/123.png"   
                alt="Dashboard illustration" 
                className="h-48 w-auto object-contain"
              />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="flex-1 text-white">
              <p className="text-xl font-normal leading-relaxed text-right [direction:rtl] max-w-2xl">
                كل ما تحتاجه في مكان واحد. قم بإدارة كافة أعمال الوقود الخاص بنشاطك التجاري من مكان واحد. ما عليك إلا شحن المحفظة وتسجيل السائقين والسيارات واستمتع بإحصائيات كاملة حول وقودك المستهلك.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
      };
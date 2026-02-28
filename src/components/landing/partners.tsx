<<<<<<< HEAD
import ekart from "../../../public/images/ekart.png"
import del from "../../../public/images/del.png"
import express from "../../../public/images/express.png"
import blue from "../../../public/images/blue.png"
import shadow from "../../../public/images/shadow.png"
import Image from "next/image"
=======
import ekart from "../../../public/images/ekart.png";
import del from "../../../public/images/del.png";
import express from "../../../public/images/express.png";
import blue from "../../../public/images/blue.png";
import shadow from "../../../public/images/shadow.png";
import Image from "next/image";
>>>>>>> origin/sonali

const Partners = () => {
  const topRowLogos = [
    { name: "ekart", logo: ekart },
    { name: "del", logo: del },
    { name: "express", logo: express },
    { name: "blue", logo: blue },
    { name: "shadow", logo: shadow },
    { name: "del", logo: del },
    { name: "express", logo: express },
<<<<<<< HEAD
    { name: "blue", logo: blue }
  ]
=======
    { name: "blue", logo: blue },
  ];
>>>>>>> origin/sonali

  const bottomRowLogos = [
    { name: "shadow", logo: shadow },
    { name: "blue", logo: blue },
    { name: "express", logo: express },
    { name: "del", logo: del },
    { name: "ekart", logo: ekart },
    { name: "shadow", logo: shadow },
    { name: "blue", logo: blue },
    { name: "express", logo: express },
<<<<<<< HEAD

  ]

  return (
    <div className="min-h-[250px] md:min-h-[300px] lg:min-h-[378px] flex flex-col justify-center bg-white py-8 md:py-12 px-4 md:px-6">
=======
  ];

  return (
    <div className="min-h-[250px] md:min-h-[300px] lg:min-h-[378px] flex flex-col justify-center bg-white py-8 md:py-12 px-4 md:px-6 overflow-hidden">
      {" "}
>>>>>>> origin/sonali
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black leading-tight px-4">
          Managing 25+ ECommerce Couriers
          <br className="hidden md:block" />
          <span className="md:inline"> So You Don't Have To</span>
        </h1>
      </div>
<<<<<<< HEAD

=======
>>>>>>> origin/sonali
      {/* Logo Grid */}
      <div className="space-y-4 md:space-y-6">
        {/* Top Row */}
        <div className="partner-">
          <div className="horizontal-scrolling-items__item">
            <div className="flex items-center gap-8 md:gap-12 horizontal-scrolling-items">
              {[...topRowLogos, ...topRowLogos].map((company, index) => (
<<<<<<< HEAD
                <div key={index} className="flex items-center justify-center min-w-[60px] md:min-w-[80px]">
=======
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[60px] md:min-w-[80px]"
                >
>>>>>>> origin/sonali
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-6 md:h-8 lg:h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="partner-reverse">
          <div className="horizontal-scrolling-items-reverse__item">
            <div className="flex items-center gap-8 md:gap-12 horizontal-scrolling-items-reverse">
              {[...bottomRowLogos, ...bottomRowLogos].map((company, index) => (
<<<<<<< HEAD
                <div key={index} className="flex items-center justify-center min-w-[60px] md:min-w-[80px]">
=======
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[60px] md:min-w-[80px]"
                >
>>>>>>> origin/sonali
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-6 md:h-8 lg:h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default Partners
=======
  );
};

export default Partners;
>>>>>>> origin/sonali

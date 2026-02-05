import Image from "next/image"
import inventory from "../../../public/images/InvtMang.png"
import inventory2 from "../../../public/images/inventory2.png"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"



const CTASection = () => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
            }}
            className="min-h-screen md:min-h-[547px] py-8 md:py-4"
        >
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 px-4 sm:px-6 md:px-12 lg:mx-0 my-4">
                {/* Left Section - Stats */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                    className="w-full md:w-1/2"
                >
                    <div
                        style={{
                            display: "grid",
                            // gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        }}
                        className="md:grid-cols-2 lg:grid-cols-2"
                    >
                        <div
                            className="px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base"
                            style={{
                                borderTop: "1px solid #DBDBDB",
                                borderBottom: "1px solid #DBDBDB",
                                borderRight: "1px solid #DBDBDB",
                            }}
                        >
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">10+</h1>
                            <p>Smart Fulfillment Warehouses</p>
                            {/* (PAN-India) */}
                            <p className="text-sm sm:text-base">(PAN-India)</p>
                        </div>
                        <div className="border px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base border-[#DBDBDB]">
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">50K+</h1>
                            <p>Verified Product SKUs</p>
                            {/* (Ready to Ship) */}
                            <p className="text-sm sm:text-base">(Winning & Trending))</p>
                        </div>
                        <div
                            className="px-4 sm:px-6 md:px-10 py-6 md:py-10 text-sm sm:text-base"
                            style={{
                                borderTop: "1px solid #DBDBDB",
                                borderBottom: "1px solid #DBDBDB",
                                borderRight: "1px solid #DBDBDB",
                            }}
                        >
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">15K+</h1>
                            <p>Active Sellers & Brands</p>
                            {/* (India + MENA) */}
                            <p className="text-sm sm:text-base">(Dropshippers + D2C)</p>
                        </div>
                        <div className="border px-4 sm:px-6 md:px-8 py-6 md:py-8 text-sm sm:text-base border-[#DBDBDB]">
                            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">10+</h1>
                            <p>Courier & Logistics Partners</p>
                            {/* (Global) */}
                            <p className="text-sm sm:text-base">(Pan-India Coverage)</p>
                        </div>
                    </div>

                    {/* CTA Text */}
                    <div style={{ lineHeight: "1.4" }} className="mt-8 md:mt-4">
                        <p className="text-xl sm:text-2xl md:text-[34px]">
                            Already Running <span style={{ color: "#0097B2" }}>A Store?</span> <br />
                            <span style={{ color: "#7ED957" }}>Connect Now</span> For Hyper-Growth!
                        </p>
                    </div>
                </div>

                {/* Right Section - Images */}
                <div
                    style={{
                        // gap: "1px",
                        position: "relative",

                    }}
                    className="w-full md:w-1/2 flex flex-col md:flex-row items-stretch gap-5"
                >
                    <div className="flex flex-col items-center w-full md:flex-1">
                        <Image
                            src={inventory}
                            alt="Warehouse worker"
                            style={{ objectFit: "cover" }}
                            className="w-full"
                        />
                        <Button
                            className="bottom-4 text-base sm:text-lg md:text-[18.94px] py-3 md:py-4 mt-6 md:mt-[47px] w-full my-button"
                            style={{
                                borderRadius: "50px",
                            }}
                        >
                            Connect my store
                            <ArrowRight className="inline-block" />
                        </Button>
                    </div>
                    <div className="hidden md:flex md:flex-1 md:flex-col md:justify-end">
                        <Image
                            src={inventory2}
                            alt="Packaging"
                            style={{ objectFit: "cover" }}
                            className="w-full"
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CTASection

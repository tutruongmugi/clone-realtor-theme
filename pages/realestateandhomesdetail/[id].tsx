import RealEstateAndHomesDetail from "../../src/components/pages/realEstateAndHomesDetail/real-estate-and-homes-detail";
import HomeDetailProvider from "../../src/providers/home-detail-provider";


export default function RealEstateandHomesDetail() { 
  return (
    <HomeDetailProvider>
      <RealEstateAndHomesDetail />
    </HomeDetailProvider>
  );
}

import '@mantine/core/styles.css';
import CarSaleSection from "./CarSaleSection";
import { FooterSocial } from './Footer';
import { GetInTouch } from './Contact';
import { Services } from './Services';
import Search from './Search';
import { HeroImageRight } from './HeroImage';

const Home = () => {
    return (
        <>
            <HeroImageRight />
            {/* <CarSaleSection />
            <div style={{width:"100%", display:"flex", justifyContent:"center", marginBottom:100}}>
            <Services />
            </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <GetInTouch />
            </div> */}
            <FooterSocial />
        </>
    );
}
export default Home;
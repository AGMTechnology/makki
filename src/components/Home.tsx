import '@mantine/core/styles.css';
import CarSaleSection from "./CarSaleSection";
import { FooterSocial } from './Footer';
import { GetInTouch } from './Contact';
import { Services } from './Services';
import Search from './Search';

const Home = () => {
    return (
        <>
            <Search />
            <CarSaleSection />
            <div style={{width:"100%", display:"flex", justifyContent:"center", marginBottom:100}}>
            <Services />
            </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <GetInTouch />
            </div>
            <FooterSocial />
        </>
    );
}
export default Home;
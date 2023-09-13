import { useEffect, useState } from "react";
import Navbar from "../admin/header/header";
import { useRouter } from 'next/router';
import Footer from "../footer/footer";
import Header from "../header/header";
import Head from 'next/head';
import BannerText from "@/pages/about/bannerText/bannerText";

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const [service, setService] = useState({});
    useEffect(()=>{
        fetch("https://infinite.geeklab.am/api/services/"+id)
            .then(x=>x.json())
            .then(data=>setService(data))
    },[id])
    return(
        <div>
             <Head>
                <title>Infinite - Book A Limo In Los Angeles</title>
             </Head>
               <Header/>
               <BannerText text={service.title}/>

              <div style={{minHeight:'60vh', width:'90%', margin:'50px auto'}}>
              {service.content}
              </div>
               <Footer/>
        </div>
                
    )
}

export default Id;
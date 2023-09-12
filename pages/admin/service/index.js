import Navbar from "@/pages/admin/header/header";
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '@/store/service/actions';

const Index = () => {
    function clickMe(id){
        // Its grdon
        try{
            fetch("https://infinite.geeklab.am/api/services/"+id)
            .then(x=>x.json())
            .then(data=>console.log(data))
        }catch(err){
            console.log(err)
        }
        // its grdon
    }
    return(
        <Navbar>
            <h1>Service</h1>
            <div className="item-dropdown">
                      <p>
                        Served Areas
                      </p>
                      <div className="sub-dropdown2">
                        <div className="sub-dropdown-content2">
                          <div className="item-dropdown" onClick={()=>clickMe(1)}>Limo Service in Malibu</div>
                          <div className="item-dropdown"  onClick={()=>clickMe(2)}>Limo Service in Studio City</div>
                          <div className="item-dropdown"  onClick={()=>clickMe(3)}>Limo Service in Encino</div>
                          <div className="item-dropdown" onClick={()=>clickMe(4)}>Limo Service in Beverly Hills</div>
                          <div className="item-dropdown" onClick={()=>clickMe(5)}>Limo Service in Long Beach</div>
                          <div className="item-dropdown" onClick={()=>clickMe(6)}>Limo Service in Hollywood</div>
                        </div>
                      </div>
                    </div>
                    <div className="item-dropdown">
                      <p>Luxury Limo Los Angeles</p>
                    </div>
                    <div className="item-dropdown">
                      <p>LAX Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Beverly Hills Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Concert and Event Limo Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Dropdown</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Executive Sedan Service</p>
                    </div>
                    <div className="item-dropdown">
                      <p>Occasions</p>
                    </div>

                    <div>
                    </div>
        </Navbar>
    )
}

export default Index;
import { Navigation } from "./navigation";
import { Wrapper } from "./wrapper";
import { Toggle } from "./toggle";
export const Sidebar =()=>{
return(
   <Wrapper>
    <Toggle/>
    <Navigation/>
   </Wrapper>
);
}
export default Sidebar; 
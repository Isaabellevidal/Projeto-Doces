import { NavigationContainer } from "@react-navigation/native"
import TabBar from './tabbar';


export default function Router(){
    return (
        <NavigationContainer>
           <TabBar/>
        </NavigationContainer>
    )
}
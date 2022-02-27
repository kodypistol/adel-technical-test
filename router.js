import usersManager from './managers/usersManager.js'
import brandsManager from "./managers/brandsManager.js";

const router = {
    init(){
        usersManager.init();
        brandsManager.init();


    }
}



export default router;
import usersManager from './managers/usersManager.js'
import brandsManager from "./managers/brandsManager.js";


const router = {
    init(){
        // Initialisation du usersManager
        usersManager.init();

        //Initialisation du brandsManager
        brandsManager.init();
    }
}



export default router;
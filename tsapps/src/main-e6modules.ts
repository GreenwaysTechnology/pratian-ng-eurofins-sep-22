import { UserComponent } from "./users/user.component";
import { UserService } from "./users/user.service";

function main(){
  let userCmp = new UserComponent(new UserService())
  userCmp.onInit()
 }
main()
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";



const Nav = () => {
   return (
     <nav className="flex items-center justify-between">
       <ModeToggle />
       <div className="mr-2 mt-1">
         <SignedIn>
           <UserButton />
         </SignedIn>
       </div>
       <SignedOut>
       </SignedOut>
     </nav>
   );
}

export default Nav;
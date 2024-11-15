import { SignIn } from "@clerk/nextjs";
import './sign-in.css'
const customAppearance = {
  elements: {
    rootBox: "my-custom-root-box",
    formButtonPrimary: "my-custom-button-primary",
    headerTitle: "",
  },
};

export default function Page() {
  return <SignIn afterSignOutUrl={"/"} appearance={customAppearance} />;
}

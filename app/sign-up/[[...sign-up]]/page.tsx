import { SignUp } from "@clerk/nextjs";
import './sign-up.css'

const customAppearance = {
  elements: {
    rootBox: "my-custom-root-box",
    formButtonPrimary: "my-custom-button-primary",
    headerTitle: "", // Set to an empty string to remove the header title
    headerSubtitle: "", // Optionally remove the subtitle
  },
};

export default function Page() {
  return <SignUp afterSignOutUrl={'/'} appearance={customAppearance} />;
}

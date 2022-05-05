import { UserProvider } from "./providers/UserProvider";
import { Router } from "./rooter/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />;
    </UserProvider>
  );
}

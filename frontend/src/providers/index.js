import { UserProvider } from "./Users";
import { ClientProvider } from "./Clients";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ClientProvider>{children}</ClientProvider>
    </UserProvider>
  );
};

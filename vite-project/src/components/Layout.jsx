import Header from "./Header";
import { Footer } from "./Footer";

/**
 * App layout wrapper that renders the `Header`, `Footer`, and page content.
 * @param {{children: import('react').ReactNode}} props - Children elements to render as main content.
 * @returns {JSX.Element}
 */
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import ScrollToTopOnRoute from "@/components/common/ScrollToTopOnRoute";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ScrollToTopOnRoute />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

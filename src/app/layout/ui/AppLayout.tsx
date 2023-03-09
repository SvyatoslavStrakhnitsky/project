import { Header } from "@/widgets/Header";
import { MainContent } from "@/widgets/MainContent";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";

export const AppLayout = () => {
    return (
        <Suspense fallback="">
            <Header />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <MainContent />
            </div>
        </Suspense>
    );
};

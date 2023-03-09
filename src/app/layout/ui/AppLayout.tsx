import { Suspense } from "react";
import { Header } from "@/widgets/Header";
import { MainContent } from "@/widgets/MainContent";
import { Sidebar } from "@/widgets/Sidebar";

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

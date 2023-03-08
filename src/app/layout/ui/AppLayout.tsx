import { Header } from "@/widgets/Header";
import { MainContent } from "@/widgets/MainContent";
import { Sidebar } from "@/widgets/Sidebar";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

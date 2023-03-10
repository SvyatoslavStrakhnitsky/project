import { HStack } from "@/shared/ui/Stack";
import { Header } from "@/widgets/Header";
import { MainContent } from "@/widgets/MainContent";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";

export const AppLayout = () => {
    return (<Suspense fallback="">
            <Header />
            <HStack>
                <Sidebar />
                <MainContent />
            </HStack>
        </Suspense>
    );
};

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AvatarChat from "@/components/Avatar/Avatar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutor | Avatar Interaction",
  description: "Avatar interaction based on configuration",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AvatarChat />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;

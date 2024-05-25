import LayoutProvider from "@/providers/LayoutProvider";

interface SetupLayoutProps{
    children: React.ReactNode;
}

const  SetupLayout= ({children}:SetupLayoutProps) => {
  return (
    <LayoutProvider>

    <div>
      {children}
    </div>

    </LayoutProvider>
  )
}

export default SetupLayout

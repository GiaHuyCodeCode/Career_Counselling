import LayoutProvider from "@/providers/LayoutProvider";

interface SetupLayoutProps{
    children: React.ReactNode;
}

const  SetupLayout= ({children}:SetupLayoutProps) => {
  return (
    <div>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </div>
  )
}

export default SetupLayout

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
  export default function ResizableDemo() {
    return (
      <div className="flex  items-center  overflow-hidden   h-screen w-full p-4">
        <ResizablePanelGroup
        direction="horizontal"
        className="w-full max-w-4xl h-96   rounded-lg border "
      >
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-left p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      </div>
    )
  }
  
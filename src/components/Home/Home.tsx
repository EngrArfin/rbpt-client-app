import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function Home() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full w-full items-center justify-center ">
          <span className="font-semibold">
            <img
              src="https://static.printmagic.com/uploads/2020/08/vinly_banner.jpg"
              alt=""
            />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex w-full h-full items-center justify-center ">
              <img
                src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-disney2B.jpg"
                alt=""
              />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex w-full h-full items-center justify-center">
              <img
                src="https://creativegenes.in/wp-content/uploads/2020/08/a9f46-a5c0a-dsc00735a.jpg"
                alt=""
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

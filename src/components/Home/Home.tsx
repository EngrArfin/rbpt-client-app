import ads from "../../assets/images/ads.png";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Carosel } from "./Header/Carosel";

export function Home() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={95}>
        <div className="flex h-full w-full items-center justify-center ">
          <Carosel />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={45}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex w-full h-full items-center justify-center bg-[#bbfb02] text-black ">
              <img
                src="https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvY29udGFjdF9pbWFnZXMvMzBkZWQzMTEtMTM1NS00NzA3LTliNzctYjAzNTRmMmFmMTI0L0Fkc19sb2dvX2hvcml6b250YWwucG5nIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjowfX19fQ=="
                alt=""
              />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70}>
            <div className="w-full h-full">
              <img
                src="https://img.pikbest.com/origin/05/99/07/74ZpIkbEsTitH.jpg!w700wp"
                alt="Advertisement"
                className="w-full h-full object-cover"
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export default function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger>
        <div>
          <button
            type="button"
            className="text-white gap-4 bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
          >
           <img className="h-8 " src="\Logo-Zalo-Arc.webp" alt="" />
            SĐT or ZALO
          </button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Bạn muốn liên hệ với chúng tôi?</DrawerTitle>
          <DrawerDescription><div className="text-center font-bold text-lg"> Bạn vui lòng liên hệ qua SĐT : 0839025683.</div></DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

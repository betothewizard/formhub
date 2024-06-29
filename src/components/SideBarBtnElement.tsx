import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "./FormElements"
import { Button } from "./ui/button";

export const SideBarBtnElement =({ formElement }: { formElement: FormElement }) =>{
    const {label,icon:Icon} =formElement.designerBtnElement;
    const draggable=useDraggable({
        id:`designer-btn-${formElement.type}`,
        data:{
            type:formElement.type,
            isDesignerBtnElement:true,
    
        },
    })

    return (
    <Button ref={draggable.setNodeRef} variant={"outline"} className="flex flex-col gap-2 h-[120px] w-[120px] cursor-grab" {...draggable.listeners} {...draggable.attributes}>
        <Icon className="h-8 w-8 text-primary cursor-grab"/>
        <p></p>
    </Button>
    )
}
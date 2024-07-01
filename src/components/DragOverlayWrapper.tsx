import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core"
import { useState } from "react";
import { SideBarBtnElement } from "./SideBarBtnElement";
import { ElementsType, FormElements } from "./FormElements";

export const DragOverlayWrapper =() =>{
        const [draggedItem,setDraggedItem] =useState<Active | null >(null);

        useDndMonitor({
            onDragStart:(event)=>{
                setDraggedItem(event.active);

            },
            onDragCancel:()=>{
                setDraggedItem(null);
            },
            onDragEnd :() =>{
                setDraggedItem(null);
        }});

        if(!draggedItem) return null;
        
        let node =<div>No drag overLay</div>
        const isSideBarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;
 
        if(isSideBarBtnElement){
            const type =draggedItem.data?.current?.type as ElementsType;
            
            node=<SideBarBtnElement formElement={FormElements[type]}/>
          
        }
       return(
        <div>
            <DragOverlay>{node}</DragOverlay>
        </div>
    )
}
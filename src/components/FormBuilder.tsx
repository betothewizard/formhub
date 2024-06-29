"use client"

import { DndContext } from "@dnd-kit/core";
import { PreviewDialogBtn } from "./PreviewDialogBtn";
import { PublishFormBtd } from "./PublishFormBtd";
import { SaveFormBtn } from "./SaveFormBtn";
import { Designer } from "./Designer";

interface FormBuilderProps{
    form:Form;
}

interface Form {
    id: number;
    userId: string;
    createdAt: Date;
    published: boolean;
    name: string;
    description: string;
    content: string;
    visits: number;
    submissions: number;
    shareURL: string;
    formSubmissions: FormSubmission[];
  }
  
  interface FormSubmission {
    id: number;
    createdAt: Date;
    formId: number;
    form: Form;
    content: string;
  }
  
export const FormBuilder=(props:FormBuilderProps) =>
{
    const {form} = props;
    return(
        // boc vao de dung duoc keo tha
        <DndContext> 
       <main className="flex flex-col w-full">
            <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
                <h2 className="truncate font-medium">
                    <span className="text-muted-foreground mr-2">Form:</span>
                    {form.name}
                </h2>
                <div className="flex items-center gap-2">
                    <PreviewDialogBtn />
                    {!form.published && (
                        <>
                            <SaveFormBtn/>
                            <PublishFormBtd/>
                        </>
                    )}
                </div>
            </nav>

            <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent">
                <Designer/>
            </div>
       </main>
       </DndContext>
    )
}
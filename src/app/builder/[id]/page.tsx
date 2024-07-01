
import { FormBuilder } from '@/components/FormBuilder';
import React from 'react'

interface BuilderPageProps {
    params: {
      id: string;
    };
  }
  
  async function BuilderPage(props: BuilderPageProps) {
    const {params}=props;
    const {id}=params;
    
    // Đây là phần getUserByID(code trong actions)
    const form= await getFormById(Number(id));
    if(!form) {
        throw new Error("form not found");
    }

    return <FormBuilder form={form}/>
  }

export default BuilderPage;
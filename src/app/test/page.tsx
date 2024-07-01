import { Form, FormBuilder, FormSubmission } from "@/components/FormBuilder";
import React from "react";

interface BuilderPageProps {
  params: {
    id: string;
  };
}

const formSubmission1: FormSubmission = {
  id: 1,
  createdAt: new Date('2023-06-28T12:00:00Z'),
  formId: 1,
  form: {} as Form, // This will be assigned later to avoid circular reference
  content: 'Sample submission content 1',
};

const formSubmission2: FormSubmission = {
  id: 2,
  createdAt: new Date('2023-06-29T12:00:00Z'),
  formId: 1,
  form: {} as Form, // This will be assigned later to avoid circular reference
  content: 'Sample submission content 2',
};

const form: Form = {
  id: 1,
  userId: 'user123',
  createdAt: new Date('2023-06-27T12:00:00Z'),
  published: true,
  name: 'Sample Form',
  description: 'This is a sample form description',
  content: 'Sample form content',
  visits: 100,
  submissions: 2,
  shareURL: 'http://example.com/share/form/1',
  formSubmissions: [formSubmission1, formSubmission2],
};

formSubmission1.form = form;
formSubmission2.form = form;

export async function BuilderPage(props: BuilderPageProps) {
  const { params } = props;
  const { id } = params;

  if (!form) {
    throw new Error("form not found");
  }

  return <FormBuilder form={form} />;
}

export default BuilderPage;

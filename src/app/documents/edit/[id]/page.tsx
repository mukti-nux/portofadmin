"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function DocumentEdit() {
  const { formProps, saveButtonProps } = useForm({ resource: "documents" });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="URL" name="url">
          <Input />
        </Form.Item>
        <Form.Item label="Thumbnail URL" name="thumbnail">
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
}

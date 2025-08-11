"use client";

import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function DocumentCreate() {
  const { formProps, saveButtonProps } = useForm({ resource: "documents" });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Title" name="title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Content" name="content">
          <Input />
        </Form.Item>
        <Form.Item label="URL" name="url">
          <Input />
        </Form.Item>
        <Form.Item label="Thumbnail URL" name="thumbnail">
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
}

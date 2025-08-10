"use client";

import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core"
import { Typography } from "antd";

export default function DocumentShow() {
  const { queryResult } = useShow({ resource: "documents" });
  const record = queryResult?.data?.data;

  return (
    <Show>
      <Typography.Title level={4}>Title</Typography.Title>
      <Typography.Text>{record?.title}</Typography.Text>

      <Typography.Title level={4}>URL</Typography.Title>
      <Typography.Text>{record?.url}</Typography.Text>

      <Typography.Title level={4}>Thumbnail</Typography.Title>
      {record?.thumbnail && (
        <img src={record.thumbnail} alt="thumb" width={120} />
      )}
    </Show>
  );
}

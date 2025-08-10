"use client";

import { List, useTable } from "@refinedev/antd";
import { Table } from "antd";

export default function DocumentList() {
  const { tableProps } = useTable({ resource: "documents" });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="url" title="URL" />
        <Table.Column
          dataIndex="thumbnail"
          title="Thumbnail"
          render={(value) => value && <img src={value} alt="thumb" width={60} />}
        />
      </Table>
    </List>
  );
}

"use client";

import { useState } from "react";

interface KanbanItem {
  id: string;
  content: string;
  createdAt: Date;
}

interface Column {
  id: string;
  title: string;
  items: KanbanItem[];
}

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([
    { id: "todo", title: "Todo", items: [] },
    { id: "inProgress", title: "In Progress", items: [] },
    { id: "codeReview", title: "Code Review", items: [] },
    { id: "done", title: "Done", items: [] },
  ]);

  // Initialize newItemTexts dynamically based on column IDs
  const [newItemTexts, setNewItemTexts] = useState<{ [key: string]: string }>(
    () =>
      columns.reduce(
        (acc, column) => ({
          ...acc,
          [column.id]: "",
        }),
        {}
      )
  );

  const addItem = (columnId: string) => {
    if (!newItemTexts[columnId]?.trim()) return;

    const newItem: KanbanItem = {
      id: crypto.randomUUID(),
      content: newItemTexts[columnId],
      createdAt: new Date(),
    };

    setColumns(
      columns.map((col) => {
        if (col.id === columnId) {
          return { ...col, items: [...col.items, newItem] };
        }
        return col;
      })
    );

    setNewItemTexts((prev) => ({
      ...prev,
      [columnId]: "",
    }));
  };

  const moveItem = (
    itemId: string,
    fromColumnId: string,
    toColumnId: string
  ) => {
    const fromColumn = columns.find((col) => col.id === fromColumnId);
    const toColumn = columns.find((col) => col.id === toColumnId);

    if (!fromColumn || !toColumn) return;

    const item = fromColumn.items.find((item) => item.id === itemId);
    if (!item) return;

    setColumns(
      columns.map((col) => {
        if (col.id === fromColumnId) {
          return {
            ...col,
            items: col.items.filter((item) => item.id !== itemId),
          };
        }
        if (col.id === toColumnId) {
          return { ...col, items: [...col.items, item] };
        }
        return col;
      })
    );
  };

  const deleteItem = (itemId: string, columnId: string) => {
    setColumns(
      columns.map((col) => {
        if (col.id === columnId) {
          return {
            ...col,
            items: col.items.filter((item) => item.id !== itemId),
          };
        }
        return col;
      })
    );
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <main className='min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl font-bold mb-8 text-gray-900'>
            Kanban Board
          </h1>

          <div className='flex gap-4 overflow-x-auto pb-4'>
            {columns.map((column, columnIndex) => (
              <div
                key={column.id}
                className='flex-1 min-w-[300px] bg-white rounded-lg shadow-sm p-4'
              >
                <h2 className='text-xl font-semibold mb-4 text-gray-800'>
                  {column.title}
                </h2>

                <div className='space-y-3'>
                  {column.items.map((item) => (
                    <div
                      key={item.id}
                      className='group relative bg-gray-50 p-4 rounded-md shadow-sm hover:shadow transition-shadow'
                    >
                      <p className='text-gray-700 pr-16'>{item.content}</p>

                      <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        {columnIndex > 0 && (
                          <button
                            onClick={() =>
                              moveItem(
                                item.id,
                                column.id,
                                columns[columnIndex - 1].id
                              )
                            }
                            className='p-1 text-gray-500 hover:text-gray-700'
                          >
                            ←
                          </button>
                        )}

                        {columnIndex < columns.length - 1 && (
                          <button
                            onClick={() =>
                              moveItem(
                                item.id,
                                column.id,
                                columns[columnIndex + 1].id
                              )
                            }
                            className='p-1 text-gray-500 hover:text-gray-700'
                          >
                            →
                          </button>
                        )}

                        <button
                          onClick={() => deleteItem(item.id, column.id)}
                          className='p-1 text-red-500 hover:text-red-700'
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-4'>
                  <input
                    type='text'
                    value={newItemTexts[column.id] || ""}
                    onChange={(e) =>
                      setNewItemTexts((prev) => ({
                        ...prev,
                        [column.id]: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => e.key === "Enter" && addItem(column.id)}
                    placeholder='Add new item...'
                    className='w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

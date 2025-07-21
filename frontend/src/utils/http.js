import { QueryClient } from "@tanstack/react-query";

const url = import.meta.env.VITE_API_URL;

// Create a client
export const queryClient = new QueryClient();

export async function fetchLists() {
  const response = await fetch(`${url}/template`);

  // Needs extracted/shared error handling, bc this is the first instance
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the List");
    error.code = response.status;
    error.info = await response.json();
    console.log(error);
    throw error;
  }

  const { lists } = await response.json();

  return lists;
}

export async function addElement(data) {
  const response = await fetch(`${url}${data.path}`, {
    method: `${data.method}`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ [data.keyName]: data[data.keyName] }),
  });

  // second instance
  if (!response.ok) {
    const error = new Error("An error occurred while adding a card");
    error.code = response.status;
    error.info = await response.json();
    console.log(error);
    throw error;
  }

  const result = await response.json();
  return result;
}

export async function deleteElement(data_) {
  const response = await fetch(`${url}${data_.path}`, {
    method: "DELETE",
  });

  // first instance
  if (!response.ok) {
    const error = new Error("An error occurred while adding a card");
    error.code = response.status;
    error.info = await response.json();
    console.log(error);
    throw error;
  }

  const data = await response.json();
  return data;
}

export async function updateItem(request) {
  const response = await fetch(`${url}${request.path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.data),
  });

  // forth instance
  if (!response.ok) {
    const error = new Error("Failed to update item");
    error.status = response.status;
    error.details = await response.json();
    throw error;
  }

  return await response.json();
}

import { QueryClient } from "@tanstack/react-query";

// Create a client
export const queryClient = new QueryClient();

export async function fetchLists() {
  const response = await fetch(`http://localhost:3000/template`);

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
  const response = await fetch(`http://localhost:3000${data.path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: data.content }),
  });

  console.log(response);
  if (!response.ok) {
    const error = new Error("An error occurred while adding a card");
    error.code = response.status;
    error.info = await response.json();
    console.log(error);
    throw error;
  }

  const result = await response.json();
  console.log(result);
  return result;
}

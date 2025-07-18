import { QueryClient } from "@tanstack/react-query";

// Create a client
export const queryClient = new QueryClient();

export async function fetchLists() {
  try {
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
  } catch (error) {
    console.error("Error fetching list:", error);
    return null;
  }
}

export async function addElement(data) {
  try {
    const response = await fetch(`http://localhost:3000${data.path}`, {
      method: `${data.method}`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: data.content }),
    });

    if (!response.ok) {
      const error = new Error("An error occurred while adding a card");
      error.code = response.status;
      error.info = await response.json();
      console.log(error);
      throw error;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error adding element", error);
  }
}

export async function deleteElement(data_) {
  try {
    const response = await fetch(`http://localhost:3000${data_.path}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const error = new Error("An error occurred while adding a card");
      error.code = response.status;
      error.info = await response.json();
      console.log(error);
      throw error;
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("error deleting element", error);
  }
}

export async function fetchLists() {
  const response = await fetch(`http://localhost:3000/template`);

  if (!response.ok) {
    const error = new Error("An error occurred while creating the event");
    error.code = response.status;
    error.info = await response.json();
    console.log(error);
    throw error;
  }

  const { lists } = await response.json();

  return lists;
}

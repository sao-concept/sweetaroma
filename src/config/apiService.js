export const fetchFoods = async () => {
  const response = await fetch("http://localhost:3001/foods");
  if (!response.ok) {
    throw new Error("Failed to fetch foods");
  }
  return response.json();
};

export const fetchMenus = async () => {
  const response = await fetch("http://localhost:3001/menus");
  if (!response.ok) {
    throw new Error("Failed to fetch menus");
  }
  return response.json();
};

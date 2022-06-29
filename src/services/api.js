export const getData = async () => {
  try {
    const response = await fetch("https://demo7796345.mockable.io/minmax");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

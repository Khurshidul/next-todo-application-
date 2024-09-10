const getAllTopics = async () => {
  try {
    const result = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!result.ok) {
      throw new Error("There is an error...");
    }
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
export default getAllTopics;

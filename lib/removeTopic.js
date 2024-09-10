export default async function removeTopic() {
  const confirmed = confirm("Are you sure to delete this topic?");
  if (confirmed) {
    try {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

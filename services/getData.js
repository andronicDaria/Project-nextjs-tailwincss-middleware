export async function getAllEmployes() {
    const response = await fetch('/api/data');
    return await response.json();
}
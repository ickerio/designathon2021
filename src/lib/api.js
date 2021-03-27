const endpoint = 'https://designathon-2021.ickerio.workers.dev/';

export async function input(data) {
    const res = await fetch(endpoint, { method: "POST", body: JSON.stringify(data)});
    const json = await res.json();
    return json.success;
}

export async function lookup(id) {
    const res = await fetch(endpoint + id)
    return res.json();
}
export async function getChannel(id) {
    const res = await fetch(`https://api.are.na/v2/channels/${id}`);

    const data = await res.json();

    console.log( data );

    if (res.ok) {
        return data;
    } else {
        throw new Error(data);
    }
}

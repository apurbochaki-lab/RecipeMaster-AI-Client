const baseUrl = process.env.NEXT_PUBLIC_SERVER;

export const serverMutation = async (path, data = {}, method = "POST") => {
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
    })

    return res.json()
}
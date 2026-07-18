import { redirect } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_SERVER;

export const serverMutation = async (path, data = {}, method = "POST") => {
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
    })

    // return res.json()
    return handleStatusCode(res)
}


export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`, {
        cache: "no-store"
    });

    // return res.json();
    return handleStatusCode(res)
}


// Status code error handle
export const handleStatusCode = (res) => {

    if (res.status === 401) {
        redirect("/error/unauthorized")
    }
    else if (res.status === 403) {
        redirect("/error/forbidden")
    }
    else if (res.status === 404) {
        redirect("/error/not-found")
    }
    else if (res.status === 500) {
        redirect("/error/server-error")
    }

    return res.json();
}
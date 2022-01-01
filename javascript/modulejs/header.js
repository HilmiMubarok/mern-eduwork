export default function createHeader(data) {
    let open = "<thead><tr>"
    let close = "</tr></thead>"
    data.forEach((d) => {
        open += `<th>${d}</th>`
    })

    return open + close
}
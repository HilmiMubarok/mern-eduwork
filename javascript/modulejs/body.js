export default function createBody(data) {
    let open = "<tbody>"
    let close = "</tbody>"

    data.forEach((d) => {
        open += `
            <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            </tr>
        `
    })

    return open + close
}
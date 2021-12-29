class Table {
    constructor(init) {
        this.init = init
    }

    createType(data) {
        let type = "table"
        data.forEach((d) => {
            type += ` table-${d}`
        })
        return `<table class='` + type + `'>`
    }

    createHeader(data) {
        let open = "<thead><tr>"
        let close = "</tr></thead>"
        data.forEach((d) => {
            open += `<th>${d}</th>`
        })

        return open + close
    }

    createBody(data) {
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

    render(element) {
        let table =
            this.createType(this.init.type) +
            this.createHeader(this.init.columns) +
            this.createBody(this.init.data) +
            "</table>"
        element.innerHTML = table
    }
}

export default Table
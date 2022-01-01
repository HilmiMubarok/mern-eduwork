import createType from "./type.js"
import createHeader from "./header.js"
import createBody from "./body.js"

class Table {
    constructor(init) {
        this.init = init
    }

    render(element) {
        let table =
            createType(this.init.type) +
            createHeader(this.init.columns) +
            createBody(this.init.data) +
            "</table>"
        element.innerHTML = table
    }
}

export default Table
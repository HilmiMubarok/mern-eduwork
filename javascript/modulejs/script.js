import Table from "./module.js"

const table = new Table({
    columns: ["Name", "Email"],
    type: ["hover", "stripped", "bordered"],
    data: [
        ["Hilmi Mubarok", "m.hilmimubarok@gmail.com"],
    ]
})

const app = document.getElementById("app")
table.render(app)

console.log(table)
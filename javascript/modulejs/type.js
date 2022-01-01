export default function createType(data) {
    let type = "table"
    data.forEach((d) => {
        type += ` table-${d}`
    })
    return `<table class='` + type + `'>`
}
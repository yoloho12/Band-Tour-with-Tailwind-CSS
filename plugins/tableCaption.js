const plugin = require("tailwindcss/plugin")

const tableCaption = plugin(function({addUtilities}){
    addUtilities({
        ".caption-top" : {
            "caption-side" : "top"
        },
        ".caption-bottom" : {
            "caption-side" : "bottom"
        }
    })
})

module.exports = tableCaption 
const plugin = require('tailwindcss/plugin')

const animationDelay = plugin(function({matchUtilities,theme}){
    matchUtilities({
        "animation-delay" : (value) => {
            return {
                animationDelay : value
            }
        }
    },
    {
        values : theme("animationDelay"),
    }
);
},
{
        theme : {
            animationDelay : {
                100 : "100ms",
                200 : "100ms",
                300 : "100ms",
                400 : "100ms",
                500 : "100ms",
                600 : "100ms",
            }
        }
})

module.exports = animationDelay
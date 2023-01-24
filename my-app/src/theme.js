import { createTheme } from "@material-ui/core/styles";

const colors = new Map([
    ["nightMoon", "#14365d"],
    ["mauve", "#A96762"],
    ["deepBlue", "#2F5C8F"],
    ["mandarin", "#d85c27"],
    ["midnightSun", "#D10000"],
]);



const theme = createTheme({
    palette: {
        type: "dark",
        primary: {500: colors.get("deepBlue")},
        backgroundColor: colors.get("nightMoon")
    },
    mode: "dark"

})





export default theme;











































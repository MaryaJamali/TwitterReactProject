import {createTheme} from "@material-ui/core";
import tinyColor from 'tinycolor2'

const colorPrimary = "#5ea9dd";

const Theme = createTheme({
    palette: {
        primary: {
            main: colorPrimary,
            light: tinyColor(colorPrimary).lighten().toHexString()
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                // !important means priority is given to this line of code
                // for example, if we gave a fontFamily somewhere and defined another fontFamily here,
                // priority is applied to this fontFamily and this fontFamily.
                fontFamily: "shabnam !important",
            }
        },
    }
})

export default Theme;
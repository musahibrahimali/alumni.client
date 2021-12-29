import { makeStyles } from "@mui/styles";

export const PostFormStyles = makeStyles(
    theme => ({
        mainContainer: {
            display: "flex",
            justifyContent: "space-between",
            padding: theme.spacing(2),
        },
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: theme.spacing(1),
        },
        space: {
            paddingRight: "5px",
            paddingLeft: "5px",
        }
    })
);
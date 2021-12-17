import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    contentNav: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        minWidth: '100%',
        zIndex: 1
    },
    backIcon: {
        marginRight: 8,
    },
    title: {
        color:'#424242',
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8
    },
})

export default useStyles
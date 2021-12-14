import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    main: {
        backgroundColor: "#fafafa",
        padding: 0,
        margin: 0
    },
    container: {
        marginBottom: 16
    },
    contentNav: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    backIcon: {
        marginRight: 8,
    },
    title: {
        color:'#424242',
        fontSize: 24,
        fontWeight: "bold",
    },
    item: {
        borderRadius: 6,
        backgroundColor: "#e0e0e0",
        height: 160,
        textAlign: 'center',
        color:'#424242',
        '&:hover': {
            backgroundColor: '#ef6c00',
            color: '#f5f5f5'
        },
        '&:active': {
            backgroundColor: '#ffa726',
            color: '#f5f5f5'
        }
    },
    
})

export default useStyles
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    container: {
        backgroundColor: "#f5f5f5",
    },
    item: {
        height: 160,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#e3f2fd'
        },
        '&:active': {
            backgroundColor: '#bbdefb'
        }
    },
    
})

export default useStyles
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
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
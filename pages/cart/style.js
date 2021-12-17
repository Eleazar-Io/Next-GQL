import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    cardItemBox: {
        borderColor: "#ffcc80",
        borderWidth: 2,
        '&:hover':{
            color: '#ef6c00'
        }
    },
    cardItem: {
        height: 380,
        
    },
    itemTitle: {
        marginBottom: 12
    },
    itemPrice: {
        fontWeight: "bold"
    },
    removeBtn: {
        fontWeight: 'bold',
        width: '100%'
    }
})

export default useStyles
import React from "react";
import useStyles from "./style"
import { Button, Typography, Box } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from "next/router";

const ContentNav = ({title})=> {
    const router = useRouter()
    const style = useStyles()
    return(
        <Box className={style.contentNav}>
            <Button onClick={()=>router.back()} className={style.backIcon} variant="text">
                <ArrowBackIosNewIcon/>
            </Button>
            <Typography className={style.title}>{title}</Typography>
        </Box>    
    )
}

export default ContentNav
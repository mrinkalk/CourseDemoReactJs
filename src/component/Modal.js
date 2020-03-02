
import React,{Fragment} from 'react';
import { Box, Drawer, Typography } from '@material-ui/core';

const Modal = props => {
    const {isModalOpen, modalHandler} = props;

    return(
        <Fragment>
            <Drawer 
            anchor={`top`} 
            open={isModalOpen} 
            onClose={() => modalHandler(false)}>

            <Box mt={10} mb={10}>
                <Typography 
                variant={`h6`} 
                align={`center`}>
                {`Your course has been successfully registered.`}
                </Typography>
            </Box>

            </Drawer>
        </Fragment>
    );
}

export default Modal;
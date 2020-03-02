import React,{Fragment} from 'react';
import { Box, Button, CircularProgress } from '@material-ui/core';

const SubmitButton = props => {
    const { isLoading, formSubmitHandler} = props;

    return(
        <Fragment>
            <Box mt={2}>
                <Button 
                    disabled = {isLoading ? true : false}
                    variant={`outlined`} 
                    color={`primary`}
                    onClick={()=>formSubmitHandler()}>
                    {`Submit`}
                    {isLoading ? 
                        <Box 
                            ml={1} 
                            display={`flex`}>
                            <CircularProgress size={15}/>
                        </Box> : `` }
                </Button>
            </Box>
        </Fragment>
    );
}

export default SubmitButton;
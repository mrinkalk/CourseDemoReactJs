import 'date-fns';
import React,{Fragment} from 'react';
import { Grid, TextField, FormHelperText } from '@material-ui/core';

const AdditionalNotes = props => {
    const {additionalNotes, validationCollection, additionalNotesChangeHandler} = props;

    return(
        <Fragment>
            <Grid 
                container 
                spacing={3}>

                <Grid item xs={`12`}>

                    <TextField 
                        fullWidth={true}
                        id={`outlined-basic`} 
                        label={`Additional Notes`} 
                        variant={`outlined`} 
                        multiline={true} 
                        value={additionalNotes}
                        error={validationCollection.additionalNotesValidationMessage ? true : false}
                        onChange={(e) => additionalNotesChangeHandler(e)} />
                        
                    <FormHelperText error={true}> 
                        { validationCollection.additionalNotesValidationMessage ? validationCollection.additionalNotesValidationMessage : ``}
                    </FormHelperText>
                </Grid>  
            </Grid>
        </Fragment>
    );
}

export default AdditionalNotes;
import 'date-fns';
import React,{Fragment} from 'react';
import { Grid, FormLabel, FormControlLabel, FormGroup, Checkbox, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Subject = props => {
    const classes = useStyles();
    const{subject, validationCollection, subjectSelectionHandler} = props;

    console.log('subject', subject)

    return(
        <Fragment>
            {subject && subject.length > 0 ? 
                <Grid 
                container 
                spacing={3}>

                <Grid item xs={`12`}>
                    <FormLabel 
                    component={`legend`} 
                    className={classes.formLabel}>
                    {`Subject`}
                    </FormLabel>
                    <FormGroup className={classes.flexRow}>
                    
                    {subject.map((information, index)=> {
                        return (
                        <FormControlLabel
                            key={index}
                            label={information.name}
                            control={
                            <Checkbox 
                                value={`gilad`}
                                color={`primary`} 
                                checked={information.status} 
                                onChange={() => subjectSelectionHandler(index) } />
                            } />)
                    }) }
                    </FormGroup>
                    <FormHelperText error={true}> 
                    { validationCollection.subjectValidationMessage ? validationCollection.subjectValidationMessage : ``}
                    </FormHelperText>
                </Grid>
                </Grid> 
                :
                <div/>}
        </Fragment>
    );
}

const useStyles = makeStyles({
    flexRow: {
      flexDirection: 'row'
    },
    formLabel:{
      fontSize: 14
    }
  });

export default Subject;
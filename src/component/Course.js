import 'date-fns';
import React,{Fragment} from 'react';
import { Grid, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Course = props => {
    const classes = useStyles();
    const{course, validationCollection, courseChangeHandler} = props;

    return(
        <Fragment> 
            <Grid 
                container 
                spacing={3}>
          
                <Grid item xs={`12`}>
                    <FormLabel
                        component={`legend`}
                        className={classes.formLabel}>
                        {`Course`}
                    </FormLabel>
                
                    <RadioGroup 
                        aria-label={`course`} 
                        name={`course`}
                        value={course}
                        className={classes.flexRow}
                        onChange={(e) => courseChangeHandler(e)}>

                        <FormControlLabel
                            label={`Technical Report Writing`}
                            value={`TRW`} 
                            control={
                                <Radio color={`primary`}/>
                            } />

                        <FormControlLabel 
                            label={`English Literature`}
                            value={`EL`} 
                            control={
                                <Radio color={`primary`}/>
                            } />

                        <FormControlLabel 
                            label={`Computer Sciences`} 
                            value={`CS`} 
                            control={
                                <Radio color={`primary`}/>
                            }/>
                    </RadioGroup>

                    <FormHelperText error={true} > 
                        { validationCollection.courseValidationMessage ? validationCollection.courseValidationMessage : ``}
                    </FormHelperText>
                </Grid>
            </Grid>
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

export default Course;
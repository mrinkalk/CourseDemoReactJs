import 'date-fns';
import React,{Fragment} from 'react';
import { Grid, FormHelperText } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

const StartDate = props => {
    const classes = useStyles(); 
    const {selectedDate, validationCollection, dateChangeHandler } = props;   

    return(
        <Fragment>
            <Grid 
                container 
                spacing={3}>
    
                <Grid item xs={`12`}>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            fullWidth={true}
                            disableFuture
                            openTo={`year`}
                            format={`dd/MM/yyyy`}
                            label={`Start date`}
                            views={['year', 'month', 'date']}
                            value={moment(selectedDate,'DD/MM/YYYY').format('MM/DD/YYYY')}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }}
                            }
                            onChange={(date)=>dateChangeHandler(date)} />
                    </MuiPickersUtilsProvider>

                    <FormHelperText error={true}> 
                        { validationCollection.startDateValidationMessage ? validationCollection.startDateValidationMessage : ``}
                    </FormHelperText>
                </Grid>
            </Grid>
        </Fragment>
    );
}

const useStyles = makeStyles({
    root: {
      marginTop:100
    },
    labelRoot: {
      fontSize: 18,
    },
    labelFocused: {}
  });

export default StartDate;
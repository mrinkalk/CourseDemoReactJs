import React,{Fragment, useState} from 'react';
import { Box, Card, CardContent, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';
import _ from 'lodash';

import {Modal, SubmitButton, AdditionalNotes, StartDate, Course, Subject} from './component';

function App() {
  const classes = useStyles();

  const subjectList = [
    [
      { name: 'Short Reports', status: false},
      { name: 'Annual Reports', status: false},
      { name: 'Presentations', status: false}
    ],
    [
      { name: 'Poetry', status: false},
      { name: 'Short Stories', status: false},
      { name: 'Drama', status: false}
    ],
    [
      { name: 'Web Development', status: false},
      { name: 'Desktop Software Development', status: false},
      { name: 'Research and Analysis', status: false}
    ]
  ];

  const validationRules = [
    {courseValidationMessage : ``},
    {subjectValidationMessage: ``},
    {startDateValidationMessage: ``},
    {additionalNotesValidationMessage: ``}
  ]
  
  const [course, setCourse] = useState('TRW');
  const [subject, setSubject] = useState(subjectList[0]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [validationCollection, setValidationCollection] = useState(validationRules);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const _courseChangeHandler = (e) => {
    let selectedValue = e.target.value;
    let selectedCourseSubject;

    switch(selectedValue){
      case 'TRW':
        selectedCourseSubject = subjectList[0];
        break;
      case 'EL':
        selectedCourseSubject = subjectList[1];
        break;
      case 'CS':
        selectedCourseSubject = subjectList[2];
        break;
      default:
        selectedCourseSubject = null;
        break;
    }
    setCourse(selectedValue);
    setSubject(selectedCourseSubject);
  }

  const _subjectSelectionHandler = (index) => {
    let subjectInformation = [...subject];
    subjectInformation[index].status = !subjectInformation[index].status;
    setSubject(subjectInformation);
  } 

  const _dateChangeHandler = (date) => {
    setSelectedDate(date)
  }

  const _modalHandler = (status) => {
    setIsModalOpen(status);
  }

  const _formSubmitHandler = () => {
    let validationRules = [...validationCollection];
    let additionalNotesLength = _.size(additionalNotes);
    let selectedDateValue = moment(selectedDate).utcOffset("+05:30").format('YYYY/MM/DD');

    if((course != 'TRW') && (course != 'EL') && (course != 'CS')){
      validationRules.courseValidationMessage = `atleast one course has to be selected.`;
    }else{
      validationRules.courseValidationMessage = ``;
    }

    if(_.filter(subject, {status:true}).length == 0){
      validationRules.subjectValidationMessage = `atleast one subject has to be selected.`;
    }else{
      validationRules.subjectValidationMessage = ``;
    }

    if(moment(selectedDateValue).isSame('2019/12/20') || moment(selectedDateValue).isSame('2020/01/15') || moment(selectedDateValue).isSame('2020/02/01')){
      validationRules.startDateValidationMessage = ``;
    }else{
      validationRules.startDateValidationMessage = `your selected course and subject is not offered beginning from your selected date.`;
    }

    if(additionalNotesLength > 0){
      if(additionalNotesLength < 20){
        validationRules.additionalNotesValidationMessage = `additional notes should contain atleast 20 characters.`;
      }else if(additionalNotesLength > 500){
        validationRules.additionalNotesValidationMessage = `additional notes should not contain characters more then 500.`;
      }else{
        validationRules.additionalNotesValidationMessage = ``;
      }
    }else{
      validationRules.additionalNotesValidationMessage = ``;
    }

    setValidationCollection(validationRules);

    if(
      (!(validationRules.courseValidationMessage)) &&
      (!(validationRules.subjectValidationMessage)) &&
      (!(validationRules.startDateValidationMessage)) &&
      (!(validationRules.additionalNotesValidationMessage))
    ){
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsModalOpen(true);
      }, 3000);
    }
  }

  return (
    <Fragment>
      <Container 
        maxWidth={`md`} 
        fixed={true}
        className={classes.root} >
          
        <Box mb={5}>
          <Typography 
              variant={`h4`} 
              align={`center`}>
              {`Course Registration`}
          </Typography>
        </Box>
        
        <Card elevation={20} className={classes.card}>
          <CardContent> 

            <Course
              course={course}
              validationCollection={validationCollection}
              courseChangeHandler={(e) => _courseChangeHandler(e)}/>

            <Subject 
              subject={subject}
              validationCollection={validationCollection}
              subjectSelectionHandler={(index) => _subjectSelectionHandler(index)}/>
          
            <StartDate 
              selectedDate={selectedDate}
              validationCollection={validationCollection}
              dateChangeHandler={(date)=>_dateChangeHandler(date)}/>

            <AdditionalNotes 
              additionalNotes={additionalNotes}
              validationCollection={validationCollection}
              additionalNotesChangeHandler={(e) => setAdditionalNotes(e.target.value)}/>

            <SubmitButton
              isLoading={isLoading}
              formSubmitHandler={() => _formSubmitHandler()}/>
          </CardContent>
        </Card>

        <Modal 
          isModalOpen={isModalOpen}
          modalHandler={(status) => _modalHandler(status)}/>

      </Container>
    </Fragment>
  );
}

const useStyles = makeStyles({
  root: {
    marginTop:100
  }
});

export default App;
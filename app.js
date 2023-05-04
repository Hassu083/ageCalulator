function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function withInRange(number, num1, num2) {
    return number >= num1 & number <= num2;
}

function validateDate(date){
    if(containsOnlyNumbers(date)){
        if(withInRange(date,1,31)){
            return true;
        }
    }
    return false;
}

function validateMonth(month){
    let validate = false;
    if(containsOnlyNumbers(month)){
        if(withInRange(month,1,12)){
            validate = true;
        }
    }else{
        ["january","february","march",
        "april","may","june","july",
            "august","september","october",
            "november","december"].forEach(function (element,index){
                if(element.substring(0,3).includes(String(month).toLowerCase()) | element == String(month).toLowerCase()){
                    month = index + 1;
                    validate = true
                }
            });
    }
    return [validate,month];
}

function validateYear(year){
    if(containsOnlyNumbers(year)){
        const currentYear =  new Date().getFullYear()
        return year <= currentYear;
    }
    return false;
}

function input(inp){
    const validateFunc = { 'date':validateDate, 'month':validateMonth , 'year':validateYear}
    const entity = prompt(`Enter ${inp}`);
    if(!entity){
        return false;
    }
    if(inp==='month'){
        if(validateFunc[inp](entity)[0]){
            return validateFunc[inp](entity)[1];
        }
    }
    else if(validateFunc[inp](entity)){
        return entity;
    }
    alert(`Invalid ${inp}`);
    return false;
}

function takeInput(){
    let [date, month, year] = [false, false, false];
    while(!(!!date & !!month & !!year)){
        if(!date){
            date = input('date');
        }
        if(!month){
            month = input('month');
        }
        if(!year){
            year = input('year')
        }
    }
    const dob = new Date();
    dob.setDate(date);
    dob.setFullYear(year);
    dob.setMonth(month-1);
    return dob;
}

function getAge(dob) {
    var now = new Date();
    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();

    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";
  
  
    yearAge = yearNow - yearDob;
  
    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }
  
    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
  
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
  
    if ( age.years > 1 ) yearString = " years";
    else yearString = " year";
    if ( age.months> 1 ) monthString = " months";
    else monthString = " month";
    if ( age.days > 1 ) dayString = " days";
    else dayString = " day";
  
  
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
      ageString = "Only " + age.days + dayString + " old!";
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
      ageString = age.years + yearString + " old. Happy Birthday!!";
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.years + yearString + " and " + age.months + monthString + " old.";
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.months + monthString + " and " + age.days + dayString + " old.";
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
      ageString = age.years + yearString + " and " + age.days + dayString + " old.";
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.months + monthString + " old.";
    else ageString = "Oops! Could not calculate age!";
  
    return ageString;
  }


  alert(getAge(takeInput()));




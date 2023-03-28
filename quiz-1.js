const whichSchool  = function (age) {
  let school = ""
  if (age > 18) {
    school = "Lighthouse Labs";
  } else if (age >= 13) {
    school = "Secondary School";
  } else {
    school = "Elementary School";
  }
  return(school)
}
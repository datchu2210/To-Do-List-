exports.getDate = function(){
  let currentDay=new Date();
  let options = {weekday:'long',month:'long',day:'numeric'}
  let day = currentDay.toLocaleString("en-US",options)
  return day
};

return exports;

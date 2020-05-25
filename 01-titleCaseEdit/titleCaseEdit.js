function titleCaseEdit(title) {
  
  var titleEdit = title.split(" ");
  for(var i=0; i<titleEdit.length; i++)
  {
  	titleEdit[i] = titleEdit[i][0].toUpperCase() + titleEdit[i].slice(1);
  }
return titleEdit.join(" ");
}


// Do not edit this line;
module.exports = titleCaseEdit;
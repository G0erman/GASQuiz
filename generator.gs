
function createQuiz() {
  // Create the form
  var form = FormApp.create('Name Form');
  form.setIsQuiz(true);
  // Make a 10 point question and set feedback on it
  var item = form.addCheckboxItem();
  item.setTitle("What flavors are in neapolitan ice cream?");
  item.setPoints(10);
  // chocolate, vanilla, and strawberry are the correct answers
  item.setChoices([
    item.createChoice("chocolate", true),
    item.createChoice("vanilla", true),
    item.createChoice("rum raisin", false),
    item.createChoice("strawberry", true),
    item.createChoice("mint", false)
  ]);
  
  // True or False
  var item = form.addMultipleChoiceItem();
  item.setTitle('Do you prefer cats or Dogs?');
  item.setPoints(10);
  item.setChoices([
    item.createChoice('Cats',false),
    item.createChoice('Dogs',true)
  ]);
  
  // Text item
  var item = form.addTextItem();
  item.setPoints(10);
  item.setTitle('What is your name');
  item.isRequired();
  
}


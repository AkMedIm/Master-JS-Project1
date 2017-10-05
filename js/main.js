var db = [
  {name: 'Semicolon Simo', email: 'Semicolon@gmail.com', age:15},
  {name: 'Bart Kwan', email: 'BartyFarty@gmail.com', age:25},
  {name: 'Jay Kay', email: 'JK@gmail.com', age:10}

]; //Creating the database

(function Avatars(db){
  this.init=function(){
    this.generateList();
    this.enterUser();
  }
  this.generateList = function(){
    var parent = document.querySelector('#parent_avatars');
    var template ='';
    for(var i=0; i<db.length; i++){
       template +='<div class="col-sm-4"> ';
       template +='<div class="card"> ';
       template +='<div class="card-delete" data-card="">X</div> ';
       template +='<div  ';
       template +='class="card-block"> ';
       template +='<h3 class="card-title">'+db[i].name+'</h3> ';
       template +='    <p class="card-text"><strong>Email:</strong>'+db[i].email+'</p>';
       template +='<p class="card-text"><strong>Age:</strong>'+db[i].age+'</p> ';
       template +='</div>';
       template +='</div> ';
       template +='    </div>';
    }
    parent.innerHTML="";
    parent.insertAdjacentHTML('afterbegin',template);

  };
  this.enterUser = function(){

    function grabUser(){
      var name = document.querySelector('#user_name').value;
      var email = document.querySelector('#user_email').value;
      var age = document.querySelector('#user_age').value;


      var elements=[name,email,age];

      if(validateUser(elements)){
        document.querySelector('#myForm').reset();
        db.push({name:name,email:email,age:age});
        generateList();

      } else{
          //show the error
          // hide the error after 5 secs
          document.querySelector('#error').style.display='block';
          setTimeout(function(){
            document.querySelector('#error').style.display='none';
          },2000)
      }




    }

    document.querySelector('#myForm').addEventListener('submit',function(e){
      e.preventDefault();
       grabUser();
    });
  };
  this.validateUser = function (inputs){
    for(var i=0 ; i < inputs.length ; i++){
      if(inputs[i]==""){
        return false;
      }
    } return true;
  };
  this.init();
}) (db);

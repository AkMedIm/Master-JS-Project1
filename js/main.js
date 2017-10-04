var db = [
  {name: 'Semicolon Simo', email: 'Semicolon@gmail.com', age:15},
  {name: 'Bart Kwan', email: 'BartyFarty@gmail.com', age:25},
  {name: 'Jay Kay', email: 'JK@gmail.com', age:10}

];
(function Avatars(db){
  this.init=function(){
    this.generateList();
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
    parent.innerHtml=''
    parent.insertAdjacentHTML('afterbegin',template);

  }
  this.init();
}) (db);

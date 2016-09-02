// var person={
//     name:'Nag',
//     sayName:function(){
//         console.log('im '+this.name);
//     }
// };

// //person.sayName();

// var p=person;
// person={name:'Ria'};

// p.sayName();

//------------------------------------------

// function sayNameForAll(params) {
//     console.log('im '+this.name);
// }
// // var p1={name:'nag',sayName:function() {console.log('im '+this.name)}};
// // var p2={name:'ria',sayName:function() {console.log('im '+this.name)}};

// var p1={name:'nag',sayName:sayNameForAll};
// var p2={name:'ria',sayName:sayNameForAll};



// sayNameForAll()  // im ""    // function-invocation pattern  : this --> global-obj
// p1.sayName();    // im Nag   // method-invocation pattern    : this --> invoker
// p2.sayName();    // im Ria

//------------------------------------------

// var util1={
//     sayName:function(message,from) {
//         console.log(message+ ' im '+this.name + " "+from);
//     }
// };
// var util2={
//     sayName:function(message,from) {
//         console.log(message+' my name '+this.name +" "+from);
//     }
// };

// var p1={name:'Nag'};
// var p2={name:'Ria'};

// // dynamic function binding    ( cal/apply/bind invocatio pattern)

// // a.eager fucn invocation
// // util1.sayName.call(p1,"Hello","Bangalore");
// // util2.sayName.apply(p2,["Hi","chennai"]);

// // b.lazy func invocation
// var newF=util1.sayName.bind(p1,"Hello","Bangalore");

// // if greet-event on p1
// newF();

//------------------------------------------

// var p1={name:'A'};
// var p2={name:'B'};


/*
 in other lang,
 to create many similar objs we use 'class' syntax
 in JS ,
 we use 'ConstructorFunction'  ==== class 
*/

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayName=function() {
//         console.log('im '+this.name);
//     };
// }

// var p1=new Person('Nag',32);  //  constructor-invocation pattern  : this --> new-obj
// var p2=new Person('Ria',1);

// p1.sayName();
// p2.sayName();




//------------------------------------------


// in JS , can invoke func in 4 ways

/*
    --> (global) function invocation     ( this --> global-obj )
    --> method invocation               ( this --> invoker-obj    )
    --> dynamic func binding invocation ( this --> arg-obj to call/apply/bind methods)
    --> constructor invocation          ( this --> new-obj)
*/




// quiz-1

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayName=function() {
//         console.log('im '+this.name);
//     };
// }


// var p1=Person('some-name',32);


// // quiz-2
// var name='Window';
// var trainer={
//     name:'Nag',
//     doTeach:function(){
//         console.log(this.name+" teaching JS");  // Nag teaching JS
//         var that=this;
//         function learn(){
//             console.log(this.name+' learning JS from '+that.name);  // learning JS from ???
//         }
//         // learn();    //  global
//         var emp={name:'emp1'};
//         learn.call(emp); // emp
//     }
// };

// document.querySelector('#teach')
// .addEventListener('click',trainer.doTeach.bind(trainer));


//------------------------------------------------------------



// JS closures

// function tng(){
    
//     console.log('Teaching JS');
//     var notes='JS Notes'
    
//     function learn(){
//         console.log('learning with '+notes);
//     }
    
//     console.log('Teaching Finished');
    
//     return learn;
// }

// var learnFunc=tng(); //

// learnFunc();

//-----------------------------------------------


//  JS - Inheritance


// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     // this.sayName=function() {
//     //     console.log('im '+this.name);
//     // };
// }

// Person.prototype.sayName=function() {
//     console.log('im '+this.name);
// };

// var p1=new Person('Nag',32);  //  constructor-invocation pattern  : this --> new-obj
// var p2=new Person('Ria',1);


//-----------------------------------------------


// var box=document.querySelector('.jumbotron');
// var hideBtn=document.querySelector('.btn-danger');
// var showBtn=document.querySelector('.btn-success');


// hideBtn.addEventListener('click',function(){
//     box.style.display='none';
// });
// showBtn.addEventListener('click',function(){
//     box.style.display='block';
// });


//---------------------------------------------------



function tng(){
        var name="Nag";  // moved to heap..
        // Web API call
        setTimeout(function(){
            try {
            console.log('after timout...');
            //throw new Error('oops');
            console.log('im back '+name);
             } catch (error) {
                console.log('i caught '+error.message);
             }
        },5000);
        
   
}

tng();

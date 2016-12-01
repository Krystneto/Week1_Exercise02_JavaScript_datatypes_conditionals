console.log("script linked!")

//////////////////////////////
//          STEP 1          //
//////////////////////////////

// First build two objects 'mom' and 'dad' as object literals (e.g. 'var mom = {}'). If you have a non-traditional family structure, just use someone everybody loves, like Joe Biden or Oprah.

var mom = {};

var dad = {};



// uncomment these console.logs after you write your code
console.log('mom object after step 1:', mom)
console.log('dad object after step 1:', dad)

//////////////////////////////
//          STEP 2          //
//////////////////////////////

// Create one Physicality object and one Personality object for each parent (e.g. 'mom.physicality = {}' and 'mom.personality = {}').

mom.personality = {};

mom.physicality = {};

dad.personality = {};

dad.physicality = {};

console.log('mom object after step 2:', mom)
console.log('dad object after step 2:', dad)

//////////////////////////////
//          STEP 3          //
//////////////////////////////

// Using different data types (Number, String, Array, Object, Null, & Boolean), add **5 physical attributes** to each of your parents.

mom.personality = {
  intelligent: true,
  temperament: 'melancholic',
  positive: 'adventurous',
  neutral: 'mellow',
  negative: 'passive'
};

dad.personality = {
  intelligent: true,
  temperament: 'choleric',
  positive: 'creative',
  neutral: 'artful',
  negative: 'opinionated'
};

console.log('mom object after step 3:', mom)
console.log('dad object after step 3:', dad)

//////////////////////////////
//          STEP 4          //
//////////////////////////////

// Do the same with the personality object!

mom.physicality = {
  height: '5 foot 5 inches',
  weight: '120 pounds',
  hair_color: 'brown',
  eye_color: 'brown',
  athletic: false
};

dad.physicality = {
  height: '5 foot 11 inches',
  weight: '220 pounds',
  hair_color: 'brown',
  eye_color: 'hazel',
  athletic: true
};


// uncomment these console.logs after you write your code
console.log('mom object after step 4:', mom)
console.log('dad object after step 4:', dad)

//////////////////////////////
//          STEP 5          //
//////////////////////////////

// Now build yourself by referencing physical and personality attributes from your folks!

var me = {};

me.personality = {
  intelligent: true,
  temperament: 'melancholic',
  positive: 'alert',
  neutral: 'complex',
  negative: 'indecisive'
};

me.physicality = {
  height: '6 foot 1 inches',
  weight: '183 pounds',
  hair_color: 'black',
  eye_color: 'hazel',
  athletic: true
};





// uncomment this console.log after you write your code
console.log('me object after step 5:', me)

//////////////////////////////
//          STEP 6          //
//////////////////////////////

// Make 2 lists: first, what you're good at, and second, what you're bad at.


me.good = ['machining', 'CAM programming', 'working with others', 'listening'];

me.bad = ['negotiating', 'speaking up', 'folding clothes'];




// uncomment this console.log after you write your code
console.log('me object after step 6:', me)

//////////////////////////////
//          STEP 7          //
//////////////////////////////

// Age yourself.

me.age = 32;





// uncomment this console.log after you write your code
console.log('me object after step 7:', me)

//////////////////////////////
//          STEP 8          //
//////////////////////////////

// Delete half of the things you were good at.

me.good.splice(2,2);





// uncomment this console.log after you write your code
console.log('me object after step 8:', me)

//////////////////////////////
//          STEP 9          //
//////////////////////////////

// Age yourself (again).


me.age = 32;



// uncomment this console.log after you write your code
console.log('me object after step 9:', me)

//////////////////////////////
//          STEP 10         //
//////////////////////////////

// Add 'sitting' to the things you're good at and remove everything else from the list.

me.good.splice(0,2,'sitting');




// uncomment this console.log after you write your code
console.log('me object after step 10:', me)

//////////////////////////////
//          STEP 11         //
//////////////////////////////

// Add 5 more things to the list of things you're bad at.

me.bad.splice(me.bad.length,0,'traveling by plane','long-distance running','looking for good deals','packing clothes','interior design');




// uncomment this console.log after you write your code
console.log('me object after step 11:', me)

//////////////////////////////
//           BONUS          //
//////////////////////////////

// Create a method that prints out one of your classic sayings!

var saying = function() {
  console.log("Why you do dat?")
}



// call your function :)
saying();

let storyOne = ['Maja','excited','dancing'];
let storyTwo = ['Adele','happy','singing'];

function theStory(input){

    let name = input[0];
    console.log(name);
    let mood = input[1];
    console.log(mood);
    let activity = input[2];
    console.log(activity);
    let story = 'This is' + ' ' + name + '. ' + name + ' ' + 'is a nice person. Today they are'+ ' ' + mood + '. They are '+ activity + ' ' + 'all day. The end.'
   return story;
}
console.log(theStory(storyOne));
console.log(theStory(storyTwo));
alert(theStory(storyOne));
alert(theStory(storyTwo));
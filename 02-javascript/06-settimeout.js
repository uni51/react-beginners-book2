const wakeUp = ms => {
  setTimeout(() => {console.log('起きた')});
};

const greet = () => {
  console.log('おやすみ');
  wakeUp(2000);
  console.log('おはよう');
}

greet();
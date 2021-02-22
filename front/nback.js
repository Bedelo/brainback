var position = [1, 2, 7, 7, 6, 6, 5, 2, 7, 3, 0, 1, 5, 8, 7, 7, 9, 7];

var c1 = document.querySelector("#c1");

const SECOND = 1000;

(() => {
  var i = 0;
  setInterval(() => {
    console.log("value = " + position[i]);
    setStyle(position[i]);
    i++;
  }, SECOND );
})();

var setStyle = (value) => {
  
  if (value == 7) {
    c1.innerHTML = '<div id="bouton" ></div>'
    setTimeout(() => {
      c1.innerHTML = "";
    }, SECOND * 0.75);
  }
};

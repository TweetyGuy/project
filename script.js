function draw() {
 var canvas = document.getElementById('canvas');
 if(canvas.getContext) {
   var c = canvas.getContext('2d');
   var width = screen.width;
   var height = screen.height;
   
   
   c.fillStyle = 'rgba(200, 140, 15, 25)';
   c.fillRect(500, 300, 30, 60);
 }
}

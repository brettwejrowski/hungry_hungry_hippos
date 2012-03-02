c.width = c.height = W = 510,
a.font = "3em m",

 	z = 20, 
	f = 255, 
	n = k = v = u = i = I = 0, 
	j = T = 11, 
	l = [], 
	o = [], 
	p = Math, 
	q = 2 * p.PI, 
	r = p.random, 
	s = p.sqrt, 
	t = p.abs, 
	Q = p.ceil,

// spacebar presses	
onkeyup = onkeydown = function(d) {
    32 == d.which && (o[0][0] = d.type[5] ? 1 : -1)
},


// draw a circle
A = function(d, e, h, m) {
	with(a)
   		m && (a.fillStyle = "0ff0f00900fff".substr(m-1,3)),
   		beginPath(), arc( d, e, h, 0, q, !0), fill();
   	return A
},

// draw the hippo
Z = function(d, e, x, y, g) {
		
	// movement offset
    k = 8 * (e+=d) - f;

    // make sure the movement is within the bounds
    !(e % 15) ? ( d = (e&&j) ? -1 : 0 ) : 15 < e ? e = 15 : 0 > e && (e = 0);

	// iterate through the balls
	for(u=0;n=l[u++];){
		// check if its eaten
        if (1 != n) {
			
			// redraw the ball on the first pass
			if(!j){
				// get our distance from center 
	            var dd = n.x, ee = n.y, dd = t(dd - f), ee = t(ee - f), dd = s(dd * dd + ee * ee);
        
				// get our acceleration based on position
				v = 40 < dd ? -0.15 : 0.4;
		
				// calculation the velocity and new position
	            n.x += n.a += 0.5 * v * (n.x > f ? 1 : -1);
	            n.y += n.b += 0.5 * v * (n.y > f ? 1 : -1);

				// redraw the ball
	            A(n.x, n.y, z, 11)
			}
			// see if we caught one
		    -1 == d && t(n.x - f-x*(k+55)) < z && t(n.y - (f+y*(k+55)) ) < 45 && (1 != n && g++, l[u-1] = 1);
        }
    }

	// draw the body, eyes and nose
    A(f+x*(k+75),f+y*(k+75), 35, j+1)(f+x*(k+30),f+y*(k+30), 55);

	// score
	a.fillStyle="#fff";
    a.fillText(g,f+x*(k),f+y*(k));
	
    return arguments
};

// create all the balls and hippos
while(--j + 1)
   	l.push({x: 60 + 350 * r(),y: 60 + 350 * r(),a: 0,b: 0}) && j<4 && o.push([ 0, 0, j&&2-j, 3-j&&1-j, 0 ]);

// main drawing function
setInterval(function() {
	
	// draw the board & background 			    
    A(f, f, 2 * W, 8)(f, f, 250, 5 );



	// iterate through the balls
	for(j=0,I=Q(r()*99); i=o[j];j++)o[j]=Z.apply(c,i);
	
	// randomly make a hippo bite
	o[I]&&I&&(o[I][0]=1);


},15);
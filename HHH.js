c.width = c.height = W = 510,
a.font = "3em m",

 	z = 20, 
	f = 255, 
	g = n = k = u = v = 0, 
	j = T = 11, 
	l = [], 
	o = [0, 0], 
	p = Math, 
	q = 2 * p.PI, 
	r = p.random, 
	s = p.sqrt, 
	t = p.abs, 
	u, 
	v,

// spacebar presses	
onkeyup = onkeydown = function(d) {
    32 == d.which && (o[0] = d.type[5] ? 1 : -1)
},


// draw a circle
A = function(d, e, h, m) {
	with(a)
   		m && (a.fillStyle = "00fff00900".substr(m-1,3)),
   		beginPath(), arc( d, e, h, 0, q, !0), fill();
   	return A
},

// draw the hippo
Z = function(d, e) {
	
	// movement offset
    k = W - 8 * (e+=d);

	// draw the body, eyes and nose
    A(f, k - 75, 35, 1)(f, k - 30, 55)(f - T, k - 91, 5, 6)(f + T, k - 90, 5)(f - z, k - 50 , T)(f + z, k - 50, T);

	// score
    a.fillText(g, f - 100, W - 50);

    // make sure the movement is within the bounds
    !e % 15 ? d = 0 : 15 < e ? e = 15 : 0 > e && (e = 0); 

	// iterate through the balls to see if we caught one
	while (n=l[--j])
        -1 == d && t(n.x - f) < z && n.y < k - 10 && n.y > k - 85 && (1 != n && g++, l[j] = 1);

	// reset the iterator
    j = 0;
    return arguments
};

// create all the balls
while(--j + 1)
   	l.push({x: 60 + 400 * r(),y: 60 + 400 * r(),a: 0,b: 0});

// main drawing function
setInterval(function() {
	
	// draw the board & background
    for (A(f, f, 2 * W, 8)(f, f, 250, 5 ); 

	// iterate through the balls
	n = l[++j]; )
	
		// check if its eaten
        if (1 != n) {
			
			// get our distance from center 
            var d = n.x, e = n.y, h = f, d = t(d - h), e = t(e - h), d = u = s(d * d + e * e);
            
			// get our acceleration based on position
			v = 40 < d ? -0.001125 * d : 0.016 * d;
			
			// calculation the velocity and new position
            n.x += n.a += 0.5 * v * (n.x > f ? 1 : -1);
            n.y += n.b += 0.5 * v * (n.y > f ? 1 : -1);

			// redraw the ball
            A(n.x, n.y, z, 3)
        }

	// call the hippo draw function
    o = Z.apply(c, o)
}, 15);
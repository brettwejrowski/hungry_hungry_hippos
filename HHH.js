// setup
for (c.width = c.height = W = 510, a.font = "4em a", z = j = 15, N=99, f = 255, S = 0, T = 10, l = [], o = [], p = Math, q = 2 * p.PI, r = p.random, s = p.sqrt, t = p.abs, P=p.pow,

// spacebar hits
onkeyup = onkeydown = function(d) {
    o[0][0] = d.type[5] ? 1 : -1
}, 

// function to handle graphing
A = function(d, b, g, e , w) {
    with (a)
        e && (fillStyle = "#"+"0ff0f009000fff".substr(e - 1, 3)), 
        w ? fillText( d , b , g ) :
        (beginPath(), arc(d, b, g, q, 0, 0), fill());
    return A
}, 

// draw our hippos
Z = function(d, b, g, e, w) {
    
    // make sure we are within our bounds
    z < (b+=d) ? b = z : 0 > b && (b = 0);    

    // stop the hippo if at the bounds
    b % z || (d = b && j ? -1 : 0 );

	// set the movement
    for (u = 0, k = 8 * b - f, 
		K = f + g * k , J = f + e * k ; 
		
	// iterate through balls	
	n = l[u++]; )

        // check if eaten
        if (1 ^ n) 
			with ( n )
    
            	// draw if first time through
	            j ||  (

	                // get acceleration
	                v = 40 < s( P(X-f,2) + P(Y-f,2) ) ? -.15 : .4,

	                // get velocity and position
	                x += X += v/2 * (x > f ? 1 : -1) - 1e-4,
	                y += Y += v/2 * (y > f ? 1 : -1),

	                // draw ball
	                A(x, y, z, 12)
	            ),

	            // check if we have eaten the ball!
	            t(x - f - g * (k + 55)) < 25 && 40 > t(y - f - e * ( k + 55 ) ) && 
                
	                // bump
	                (~d ? (X=g*3||X) && (X=e*3||Y) :
                
	                // eat
	                S++ && (1 ^ n && w++, l[u - 1] = 1));
        
		
    // draw our hippo
    A( K + g * 65, J + e * 65, 50+b/3, j + 1)(K + g * z, J + e * z, 60)
	 	

    // draw the score
    ( w , f - g * 180 - ( g || -e * N ), f - e * 180 - ( e || g * N ) , 0 , 1 )
	
	// draw the eyes
	( K + g * 40 - ( g || z ), J + e * 40 - ( e || z ) , T , 12 )
 	( K + g * 40 + ( g || z ), J + e * 40 + ( e || z ) , T , 12 )
 	( K + g * 45 - ( g || T ), J + e * 45 - ( e || T ) , 7 , 9 )
 	( K + g * 44 + ( g || T ), J + e * 44 + ( e || T ) , 7 , 9 )

    return arguments

}; --j + 1; )

    // generate balls
    l.push({x: N + f * r(),y: N + f * r(),X: 0,Y: 0}) && 

    // generate hippos
    4 > j && o.push([0, 0, j && 2 - j, 3 - j && 1 - j, 0]);


setInterval(function() {
    
    // draw board
    A(f, f, W, 8)(f, f, f, 5);

    // iterate through hippos and update
    for (j = 0, I = 0|r()*N; i = o[j];j++)
        o[j] = Z.apply(c, i);

    // randomly make an AI hippo bite
    o[++I] && S <= z && (o[I][0] = 1)
}, z)

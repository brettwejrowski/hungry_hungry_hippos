// variables
for (c.width = c.height = W = 510, a.font = "3em m", z = j = 20, f = 255, n = k = v = u = i = I = 0, T = 10, l = [], o = [], p = Math, q = 2 * p.PI, r = p.random, s = p.sqrt, t = p.abs, Q = p.ceil, P=p.pow,

// spacebar hits
onkeyup = onkeydown = function(d) {
    32 == d.which && (o[0][0] = d.type[5] ? 1 : -1)
}, 

// function to handle graphing
A = function(d, b, g, e , W) {
    with (a)
        e && (fillStyle = "#"+"0ff0f00900fff".substr(e - 1, 3)), 
        W ? fillText( d , b , g ) :
        (beginPath(), arc(d, b, g, q, 0, 0), fill());
    return A
}, 

// draw our hippos
Z = function(d, b, g, e, w) {
    
    15 < (b+=d) ? b = 15 : 0 > b && (b = 0);
        
    // set the movement
    k = 8 * b - f;

    // make sure we are within our bounds
    b % 15 || (d = b && j ? -1 : 0 );

    // iterate through balls
    for (u = 0; n = l[u++]; )

        // check if eaten
        if (1 ^ n) {
    
            // draw if first time through
            if (!j) {

                // get acceleration
                v = 40 < s( P(n.x-f,2) + P(n.y-f,2) ) ? -0.15 : 0.4;

                // get velocity and position
                n.x += n.a += v * (n.x > f ? 1 : -1)/2 - .0001;
                n.y += n.b += v * (n.y > f ? 1 : -1)/2;

                // draw ball
                A(n.x, n.y, z, 11)
            }

            // check if we have eaten the ball!
            t(n.x - f - g * (k + 55)) < 25 && 40 > t(n.y - (f + e * (k + 55))) && 
                
                // bump
                (d+1 ? (n.a=g*3||n.a) && (n.b=e*3||n.b) :
                
                // eat
                (1 ^ n && w++, l[u - 1] = 1))
        }

    // draw our hippo
    A(f + g * (k + 75), f + e * (k + 75), 45, j + 1)(f + g * (k + 30), f + e * (k + 30), 65)

    // draw the score
    ( w , f + g * (k+50), f + e * (k+50) , 11 , 1 )

    return arguments

}; --j + 1; )

    // generate balls
    l.push({x: 99 + 300 * r(),y: 99 + 300 * r(),a: 0,b: 0}) && 

    // generate hippos
    4 > j && o.push([0, 0, j && 2 - j, 3 - j && 1 - j, 0]);


setInterval(function() {
    
    // draw board
    A(f, f, 2 * W, 8)(f, f, 250, 5);

    // iterate through hippos and update
    for (j = 0, I = Q(99 * r()); i = o[j]; j++)
        o[j] = Z.apply(c, i);

    // randomly make an AI hippo bite
    o[I] && I && (o[I][0] = 1)
}, 15)

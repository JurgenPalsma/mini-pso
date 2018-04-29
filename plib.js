// inertia factor 0 < w < 1
this.w = 0.7 


// create particle
this.createParticle = function(a, v) {
    return {
        "attributes": a,
        "velocities": v
    }
}

// initialise attributes
this.setParticleAttributes = function(p, a) {

}

// initialise velocity
this.setParticleVelocity = function(p) {

}

this.generateRandomMult = function() {
    var min = 0.0,
        max = 1.0,
        n = Math.random() * (max - min) + min;
    return n;
};

// update velocity based on neighbourhood
this.updateParticleVelocity =function(p, particles) {
    for (var attr_key in p.attributes) {
        if (attr_key.hasOwnProperty(p.attributes)) {
        // vij(t) = w * vij(t – 1) + c1(pij – xij(t – 1)) + c2(pgj – xij(t – 1))
        // vij(t): new velocity
        // w * vij(t – 1): inertia factor times our previous velocity
        // c1(pij – xij(t – 1)): distance to our previous best position times a randomly decided importance factor(c1)
        // c2(pgj – xij(t – 1)): distance to global best position times a randomly decided importance factor(c2)
        c1 = getRandomMult();
        c2 = getRandomMult();
        p.velocities[attr_key] = this.w * p.velocities[attr_key] + c1*(p.attributes[attr_key]-p.velocities[attr_key]) + c2*(getBestParticle(particles).attributes[attr_key]-p.velocities[attr_key])
        }
    }

}

// update attributes based on velocity
this.updateParticleAttributes = function(p) {
    for (var attr_key in p.attributes) {
        if (attr_key.hasOwnProperty(p.attributes)) {
            // xij(t) = xij(t – 1) + vij(t)
            p.attributes[attr_key] = p.attributes[attr_key] + p.velocities[attr_key];
        }
    }
}
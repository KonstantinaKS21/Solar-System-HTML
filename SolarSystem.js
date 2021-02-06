function main()
        {
            p = new Suica();
            orthographic(-10000,10000);
            lookAt([0,200,90],[0,0,0],[0,0,1]);
            background([0,0,0]);

            //интерактивност с мишка
            p.gl.canvas.addEventListener('mousemove', mouseMove, false);
           // p.gl.canvas.addEventListener('mouseup', mouseUp, false);
			p.gl.canvas.addEventListener('mousemove', mouseDown, false);
            p.gl.canvas.addEventListener('contextmenu',function(e){e.preventDefault();},false);

            obj = document.getElementById('obj');


            //радиус на слънцето - 	696 000 km, 1:10 000
            sun = sphere([0,0,0],120).custom({
                image: new Suica.Image('8k_sun.jpg'),
                interactive: true,
                info: 'Слънце;      Температура:5505°C'
            });

            //ъгли за полярните координати, които ще са центрве на планетите
            MercuryAngle = radians(90);
            VenusAngle = radians(90);
            EarthAngle = radians(90);
            MoonAngle = radians(90);
            MarsAngle = radians(90);
            JupiterAngle = radians(90);
            JMoonAngle = radians(90);
            SaturnAngle = radians(90);
            UranusAngle = radians(90);
            NeptuneAngle = radians(90);

            //орбита на Меркурий
            r = 180;
            //координати на центъра на орбитата, по която ще се движи Меркурий
            xc = 0;
            yc = 0;
            zc = 0;
            orbitMercury = circle([xc,yc,zc], r).custom({
                mode: Suica.LINE, 
                color: [1,1,1],
                interactive: true
            });
            //радиус на Меркурий - 2440 km
            R = 25;

            //полярни координати на Mercury
            x = xc + r*Math.cos(MercuryAngle) + sun.center[0];
            y = yc + r*Math.sin(MercuryAngle) + sun.center[1];
            z = zc + sun.center[2];

            Mercury = sphere([x,y,z],R).custom({ 
                image: new Suica.Image('8k_mercury.jpg'),
                interactive: true,
                info: 'Меркурий;    Продължителност на годината: 88 дни;   Температура: -180˚С - +430˚С'
            });
            Mercury.focus = [0.4,0,1];

            //за Венера - 6052km
            orbitVenus = circle([xc,yc,zc], 235).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
            Venus = sphere([xc + orbitVenus.radius*Math.cos(VenusAngle),yc + orbitVenus.radius*Math.sin(VenusAngle),z], 31).custom({
                image: new Suica.Image('8k_venus_surface.jpg'),
                interactive: true,
                info: 'Венера;  Продължителност на годината: 225 дни;   Температура: 462°C'
            });
            Venus.focus = [0.4,0,1];

            //за Земята - 6378km
            orbitEarth = circle([xc,yc,zc], 345).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
            Earth = sphere([xc + orbitEarth.radius*Math.cos(EarthAngle),yc + orbitEarth.radius*Math.sin(EarthAngle),z], 40).custom({
                image: new Suica.Image('full.png'),
                interactive: true,
                info: 'Земя;    Продължителност на годината: 365 дни;   Температура: -88°C - +58°C'
            });
            Earth.focus = [0.4,0,1];

            //за Луната - 1738km
           rMoon = 10;
           orbitMoon = circle(Earth.center, Earth.radius + rMoon + 25).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
           Moon = sphere([orbitMoon.center[0] + orbitMoon.radius*Math.cos(MoonAngle), orbitMoon.center[1] + orbitMoon.radius*Math.sin(MoonAngle), orbitMoon[2]], 17).custom({
                image: new Suica.Image('8k_moon.jpg'),
                interactive: true, 
                info: 'Луна;    Продължителност на годината: 365 дни;   Температура: -233°C - +123°C'
           });
           

           //за Марс - 	3397km
           orbitMars = circle([xc,yc,zc], 490).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
            Mars = sphere([xc + orbitMars.radius*Math.cos(MarsAngle),yc + orbitMars.radius*Math.sin(MarsAngle),z], 30).custom({
                image: new Suica.Image('8k_mars.jpg'),
                interactive: true,
                info: 'Марс;  Продължителност на годината: 687 дни;   Температура: -125°C - +20°C'
            });
            Mars.focus = [0.4,0,1];

            //за Юпитер - 69 911km
            orbitJupiter = circle([xc,yc,zc], 660).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
            Jupiter = sphere([xc + orbitJupiter.radius*Math.cos(JupiterAngle),yc + orbitJupiter.radius*Math.sin(JupiterAngle),z], 70).custom({
                image: new Suica.Image('8k_jupiter.jpg'),
                interactive: true,
                info:'Юпитер;   Продължителност на годината: 12 години;   Температура: -145°C'
            });
            Jupiter.focus = [0.4,0,1];

            //за луна на Юпитер
            orbitJMoon = circle(Jupiter.center, Jupiter.radius + 10 + 15).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
           JMoon = sphere([orbitJMoon.center[0] + orbitJMoon.radius*Math.cos(JMoonAngle), orbitJMoon.center[1] + orbitJMoon.radius*Math.sin(JMoonAngle), orbitJMoon[2]], 20).custom({
                image: new Suica.Image('8k_moon.jpg'),
                interactive: true,
                info: 'Луна на Юпитер'
           });
           

           //за Сатурн - 58 232km
           orbitSaturn = circle([xc,yc,zc], 830).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
            Saturn = sphere([xc + orbitSaturn.radius*Math.cos(SaturnAngle),yc + orbitSaturn.radius*Math.sin(SaturnAngle),z], 55).custom({
               image: new Suica.Image('8k_saturn.jpg'),
               interactive: true,
               info: 'Сатурн;   Продължителност на годината: 29 години;   Температура: -178°C'
            });
            SaturnRing = circle(Saturn.center, Saturn.radius + 40).custom({
                color:[1,1,1],
                interactive: true,
                info: 'Сатурн;  Продължителност на годината: 29 години;   Температура: -178°C'
            })
            Saturn.focus = [0.5,0,1];
            SaturnRing.focus = [0.5,0,1];

            //за Уран - 25 559km
            orbitUranus = circle([xc,yc,zc], 955).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
            Uranus = sphere([xc + orbitUranus.radius*Math.cos(UranusAngle),yc + orbitUranus.radius*Math.sin(UranusAngle),z], 45).custom({
                image: new Suica.Image('2k_uranus.jpg'),
                interactive: true,
                info: 'Уран;    Продължителност на годината: 84 години;   Температура: -195°C'
            });
            Uranus.focus = [0,85,0,1];

            //за Нептун - 24 764km
            orbitNeptune = circle([xc,yc,zc], 1005).custom({
                mode: Suica.LINE,
                color: [1,1,1],
                interactive: true
            });
            Neptune = sphere([xc + orbitNeptune.radius*Math.cos(NeptuneAngle),yc + orbitNeptune.radius*Math.sin(NeptuneAngle),z], 42).custom({
                image: new Suica.Image('2k_neptune.jpg'),
                interactive: true,
                info: 'Нептун;  Продължителност на годината: 165 години;   Температура: -201°C'
            });
            Neptune.focus = [0.4,0,1];

            planetsMove = true;
            changeRadius = false;

		    p.nextFrame = animate;
        }
        
        function animate()
        {
            k = radians(3);
            if(planetsMove)
            {
                sun.spin += 0.1*k;
                Mercury.spin -= 0.5*k;
                Venus.spin += 0.5*k;
                Earth.spin -= 0.5*k;
                Moon.spin += 0.5*k;
                Mars.spin -= 0.5*k;
                Jupiter.spin -= 0.5*k;
                JMoon.spin += 0.5*k;
                Saturn.spin -= 0.5*k;
                Uranus.spin += 0.5*k;
                Neptune.spin -= 0.5*k;

                Mercury.center = [xc + r*Math.cos(MercuryAngle), yc + r*Math.sin(MercuryAngle), zc];
                Venus.center = [xc + orbitVenus.radius*Math.cos(VenusAngle),yc + orbitVenus.radius*Math.sin(VenusAngle),z];
                Earth.center = [xc + orbitEarth.radius*Math.cos(EarthAngle),yc + orbitEarth.radius*Math.sin(EarthAngle),z];
                orbitMoon.center = [xc + orbitEarth.radius*Math.cos(EarthAngle),yc + orbitEarth.radius*Math.sin(EarthAngle),z];
                Moon.center = [orbitMoon.center[0] + orbitMoon.radius*Math.cos(MoonAngle), orbitMoon.center[1] + orbitMoon.radius*Math.sin(MoonAngle), orbitMoon.center[2]];            
                Mars.center = [xc + orbitMars.radius*Math.cos(MarsAngle),yc + orbitMars.radius*Math.sin(MarsAngle),z];
                Jupiter.center = [xc + orbitJupiter.radius*Math.cos(JupiterAngle),yc + orbitJupiter.radius*Math.sin(JupiterAngle),z];
                orbitJMoon.center = [xc + orbitJupiter.radius*Math.cos(JupiterAngle),yc + orbitJupiter.radius*Math.sin(JupiterAngle),z];
                JMoon.center = [orbitJMoon.center[0] + orbitJMoon.radius*Math.cos(JMoonAngle), orbitJMoon.center[1] + orbitJMoon.radius*Math.sin(JMoonAngle), orbitJMoon.center[2]];            
                Saturn.center = [xc + orbitSaturn.radius*Math.cos(SaturnAngle),yc + orbitSaturn.radius*Math.sin(SaturnAngle),z];
                SaturnRing.center = [xc + orbitSaturn.radius*Math.cos(SaturnAngle),yc + orbitSaturn.radius*Math.sin(SaturnAngle),z];
                Uranus.center = [xc + orbitUranus.radius*Math.cos(UranusAngle),yc + orbitUranus.radius*Math.sin(UranusAngle),z];
                Neptune.center = [xc + orbitNeptune.radius*Math.cos(NeptuneAngle),yc + orbitNeptune.radius*Math.sin(NeptuneAngle),z];

                NeptuneAngle += 0.03*k;
                UranusAngle += 0.04*k;
                SaturnAngle += 0.05*k;
                JMoonAngle -= k;
                JupiterAngle += 0.1*k;
                MarsAngle += 0.17*k;
                MoonAngle -= k;
                EarthAngle += 0.23*k;
                VenusAngle += 0.35*k;
                MercuryAngle += 0.61*k;
            }
            

        }

        function togglePlanetsSpin()
        {
            planetsMove = !planetsMove;
        }

        function toggleRadius()
        {
            changeRadius = !changeRadius;
        }


        function dist(a,b)
		{
			return Math.sqrt((a[0]-b[0])*(a[0]-b[0]) + (a[1]-b[1])*(a[1]-b[1]));
		}

        look0 = 200;
        look1 = 90;
        scale = 1;

        function mouseDown(event)
        {
            x = event.clientX;
			y = event.clientY;
        }

        /*function mouseUp(event)
        {
            obj = undefined;
        }*/

        function mouseMove(event)
        {
            var ob = p.objectAtPoint(event.clientX, event.clientY);
            if(ob)  
            {
                obj.innerHTML = ob.info;
            }
            else
                obj.innerHTML = '';
            
            if(event.which == 1)
            {
                look0 -= (event.clientX - x)/200;
                look1 += (event.clientY - y)/200;
                if (look1 > 1.5) look1 = 1.5;
                if (look1 < -1.5) look1 = -1.5;

            }
            /*if(event.buttons == 3)
            {
                scale *= Math.pow(1.01, event.clientY-y);
                if (scale < 10) scale = 10;
                if (scale > 1000) scale = 1000;

            }*/
            lookAt([scale*Math.cos(look0)*Math.cos(look1), scale*Math.sin(look0)*Math.cos(look1), scale*Math.sin(look1)],[0,0,0], [0,0,1]);
            x = event.clientX;
			y = event.clientY;

            /*if(event.which == 3)
            {
                if(changeRadius && ob)
                {
                    ob.center[0] += event.clientX - x;
                    ob.center[1] -= event.clientY - y;
                    orbitMars = dist(Mars.center, orbitMars.center);
                }
                x = event.clientX;
                y = event.clinetY;
            }*/
            
        }

        
        
        

//datos de cada sensor
let sensor1 = [649,650,6,2,1,0,0,0,0,0,0,0,0,0,0,0,0,163,161,0,322,0,532,0,0,0,0,0,0,0,0,0,0,634,307,351,507,456,407,351,257,556,446,428];
let sensor2 = [669,671,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,178,177,0,211,0,0,6,0,0,0,0,0,0,625,624,5,3,185,172,260,334,385,272,210,334,433,458];
let sensor3 = [667,667,0,4,2,1,0,0,0,0,0,0,0,0,0,0,0,40,38,0,292,0,0,528,564,557,597,564,596,579,65,64,627,96,171,120,129,192,171,150,129,144,214,320];

//toma de elementos html
let [sen1, sen2, sen3] = ['sen1', 'sen2', 'sen3'].map( e => document.getElementById(e));

//condiciones iniciales
let dia = 1, index=0;
//INIT CONDICIONAL
do{

    sen1.innerHTML += `<tr>
                            <td>${dia}/11/2022</td>
                            <td>10:40</td>
                            <td>${sensor1[index]}</td>
                            <td>${(sensor1[index]*100)/699}</td>
                        </tr>
                        <tr>
                            <td>${dia}/11/2022</td>
                            <td>20:20</td>
                            <td>${sensor1[index+1]}</td>
                            <td>${(sensor1[index+1]*100)/699}</td>
                        </tr>
                    `
    sen2.innerHTML += `<tr>
                            <td>${dia}/11/2022</td>
                            <td>10:40</td>
                            <td>${sensor2[index]}</td>
                            <td>${(sensor2[index]*100)/699}</td>
                        </tr>
                        <tr>
                            <td>${dia}/11/2022</td>
                            <td>20:20</td>
                            <td>${sensor2[index+1]}</td>
                            <td>${(sensor2[index+1]*100)/699}</td>
                        </tr>
                    `
    sen3.innerHTML += `<tr>
                            <td>${dia}/11/2022</td>
                            <td>10:40</td>
                            <td>${sensor3[index]}</td>
                            <td>${(sensor3[index]*100)/699}</td>
                        </tr>
                        <tr>
                            <td>${dia}/11/2022</td>
                            <td>20:20</td>
                            <td>${sensor3[index+1]}</td>
                            <td>${(sensor3[index+1]*100)/699}</td>
                        </tr>
                    `
    
    dia++;
    index = index+2;
    
}while(dia<=22);
//avance de fechas con hora
//porcentaje de humedad
//dato

const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.3 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: "#",
        columns: true,
    }))
    .on('data', (data) => {
        if(isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }
    } )
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () =>{
        console.log(`${habitablePlanets.length} habitable planet found!`);
        console.log(habitablePlanets.map((planet)=>{
            return planet['kepler_name']
        }));

        // how do i create a file say a .txt or json file, and write to 
        // it the value of results which is an array on the file

        // fs.writeFile('kepler.txt', 'Hello, this is a text file!', (err) => {
        if(!fs.existsSync('habitable.json')){
            fs.writeFile('habitable.json', JSON.stringify(habitablePlanets, null, 2), (err) => {
                if (err) {
                    console.error('Error creating file:', err);
                } else {
                    console.log('Json file created successfully!');
                }
            });
        }else{
            console.log('file already exist, skip creating file...');
        }
            

    } );
// parse();



const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0, 
        name: 'Nikola Tesla',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
       id: 2,
       name: 'Albert Einstein',
    }
]

server.on('request', (req, res) => {
        const items = req.url.split('/');
        // /friends/2 => ['', 'friends', '2']
        if(req.method === 'POST' && items[1] === 'friends'){
             req.on('data', (data) => {
                const friend = data.toString();
                console.log('Request:', friend);
                friends.push(JSON.parse(friend));
             });
             req.pipe(res);

             // run in browser console
            //  fetch('http://localhost:3000/friends', {
            //     method: 'POST',
            //       body: JSON.stringify({id: 4, name: 'Grace Hopper'})
            //   })
            //   .then((response) => response.json())
            //   .then((friend) => console.log(friend));
        }
        // nagivate to localhost:3000 on your browser
        // open up the console and run this code 
        // fetch('http://localhost:3000/friends', {
        // method: 'POST',
        // body: JSON.stringify({id: 3, name: 'Ryan Dahl'})
        // });

        // if(req.url === '/friends'){
        else if(req.method === 'GET' && items[1] === 'friends'){
            // res.writeHead(200, {
            // // 'Content-Type': 'text/plain',
            // 'Content-Type': 'application/json',
            // });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            // res.end('Hello Sir Isaac Newton is your friend!');
            // res.end(JSON.stringify({
            //     id: 1,
            //     name: 'Sir Isaac Newton',
            //     field: 'Physics',
            // }));
            if(items.length === 3){
                const friendIndex = Number(items[2]);
                res.end(JSON.stringify(friends[friendIndex]));
            }else{
                res.end(JSON.stringify(friends));
            }
            
        // }else if(req.url === '/messages'){
        }else if(req.method === 'GET' && items[1] === 'messages'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<body>');
            res.write('<ul>');
            res.write('<li>Hello Isaac</li>');
            res.write('<li>What are your thoughts on astronomy</li>');
            res.write('</ul>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        }else{
            res.statusCode = 404;
            res.end();
        }
    });

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost 
const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/marksheet.html");
})

app.get('/process', (req, res) => {
    var name = req.query.Name;
    var RollNo = req.query.RollNo;
    var sub1 = parseInt(req.query.sub1);
    var sub2 = parseInt(req.query.sub2);
    var sub3 = parseInt(req.query.sub3);
    var sub4 = parseInt(req.query.sub4);
    var sub5 = parseInt(req.query.sub5);
    var d="";
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    // if(total>30)
    // {
    //     d=
    // }

    res.send(`<h1>Your Result:</h1> 
        <table border="1">
        <thead>
        <th>Subject</th>
        <th>Marks</th>
        </thead>
        <tbody>
        <tr>
        <td>DBMS</td>
        <td>${sub1}</td>
        </tr>
        <tr>
        <td>DSA</td>
        <td>${sub2}</td>
        </tr>
        <tr>
        <td>FSWD</td>
        <td>${sub3}</td>
        </tr>
        <tr>
        <td>MAD</td>
        <td>${sub4}</td>
        </tr>
        <tr>
        <td>OS</td>
        <td>${sub5}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
        <td><b>Total</b></td>
        <td><b>${total}</b></td>
        </tr>
        </tfoot>
        </table>
        `);
})

app.listen(port, () => {
    console.log(`Server running on this server http://localhost:${port}`);
})

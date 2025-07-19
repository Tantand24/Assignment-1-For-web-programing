//orignal dataset
var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

//to format the dataset so it can sort through and find info easier
const StaffDataArray = []
dataSet.forEach(person => {
    const formattedData = {}
    //to split the name
    const nameSplit = person[0].split(" ")
    formattedData.FirstName = nameSplit[0]
    formattedData.LastName = nameSplit[1]

    formattedData.FullName = person[0]
    formattedData.Postion = person[1]
    formattedData.Location = person[2]
    formattedData.Id = parseInt(person[3])
    formattedData.HiredDate = person[4]

    //replace is to remove the $ and , with a space so the string can be convert into a number
    formattedData.SalaryFormatted = parseInt(person[5].replace(/[$,]/g, ''))
    formattedData.Salary = person[5]
    StaffDataArray.push(formattedData)
    }
)

//jquery
$(document).ready(() => {
    
    //A function to create and push array to page
    function PushToPage(Array){

        let count = 0
        //To create a row for each staff listing 
        Array.forEach(s => {
            const StaffCard = $(`<div>
                <p class=StaffName>${s.FullName} </p>
                <p class=StaffPostion>${s.Postion} </p>
                <p class=StaffLocation>${s.Location} </p>
                <div class=StaffOtherInfo>
                    <p>Id number: ${s.Id} </p>
                    <p>Hiredate: ${s.HiredDate}</p>
                    <p>Salary: ${s.Salary}</p>
                </div>
                </div>`)
            
            //to style it and make not bland and hard to look at and add to page
            StaffCard.addClass("StaffCard")
            StaffCard.css('display', 'flex')
            StaffCard.css("flex-direction", "row")
            if(count % 2 == 0){
                StaffCard.css('background-color', 'lightblue')
            } else {
                StaffCard.css('background-color', 'lightgrey')
            }
            $('#StaffList').append(StaffCard)
            count++
        })
    }

    /*function to sort by Name and gotten code from 
    https://stackoverflow.com/questions/5503900/how-to-sort-an-array-of-objects-with-jquery-or-javascript
    for sorting by name*/
    let NameReverse = false
    $('#SortName').on('click', function() {
        if(NameReverse){
            //Acsending by Salary
            StaffDataArray.sort(function(a, b) {
                var aName = a.FirstName.toLowerCase();
                var bName = b.FirstName.toLowerCase(); 
            return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0))
        })
            NameReverse = false
            $('#StaffList').html('')
            $('#StaffSortInfo').text('Sorted by Name A - Z')
            PushToPage(StaffDataArray)
        } else {
            //Desending by Salary
            StaffDataArray.sort(function(a, b) {
                var aName = a.FirstName.toLowerCase();
                var bName = b.FirstName.toLowerCase(); 
                return ((bName < aName) ? -1 : ((bName > aName) ? 1 : 0))
            })
            NameReverse = true
            $('#StaffList').html('')
            $('#StaffSortInfo').text('Sorted by Name Z - A')
            PushToPage(StaffDataArray)
        }
    
    })

    //function to sort by Salary 
    let SalaryReverse = false
    $('#SortSalary').on('click', function() {

        if(SalaryReverse){
            //Acsending by Salary
            StaffDataArray.sort(function(a, b) {return a.SalaryFormatted - b.SalaryFormatted})
            SalaryReverse = false
            $('#StaffList').html('')
            $('#StaffSortInfo').text('Sorted by Salary Acsending')
            PushToPage(StaffDataArray)
        } else {
            //Desending by Salary
            StaffDataArray.sort(function(a, b) {return b.SalaryFormatted - a.SalaryFormatted})
            SalaryReverse = true
            $('#StaffList').html('')
            $('#StaffSortInfo').text('Sorted by Salary Desending')
            PushToPage(StaffDataArray)
        }
    })

    //just page starting info and pushing unsorted array
    $('#StaffSortInfo').text('Unsorted')
    PushToPage(StaffDataArray)
})
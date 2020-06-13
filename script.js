

var about = [
    'Государство', 'Столица','Континет','Часть света','Разница во времени','Денежная единица','Географические объекты','Литературные произведения','Исторические события'
];


var obj1 = {
    countries_obj: Object.assign({}, countries),
    outContries: function(){
        var body = document.getElementById('body');
        body.innerHTML = '';
        for (var j = 0; j < countries.length; j++){

   
            var country = document.createElement('div');
            country.id = countries[j][0];
            country.classList.add('bg');
        
     
            var table = document.createElement('table');
            table.classList.add('table');
        
            for (var i = 1; i < countries[j].length; i++){
        
                var tr = document.createElement('tr');
  
                var td = document.createElement('td');
		
                td.innerText = about[i - 1];
                tr.appendChild(td);
           
                td = document.createElement('td');
                if (i >= 8){
               
                    var countryEl = countries[j][i].map(el => {
                        var tdEl = document.createElement('tr');
                        for (var i = 0; i < el.length; i++)
                        {
                            tdEl.innerHTML += el[i] + ' ';
                        }
                        td.appendChild(tdEl);
                    });
                }
                else{
                    td.innerText = countries[j][i];
                }
                tr.appendChild(td);
                
                table.appendChild(tr);
            }
            country.appendChild(table);
            body.appendChild(country);
        }
    }
}

function Change(){
    this.countries_obj = Object.assign([], countries);
    this.changeCountries = function(data){

        countries.forEach(country => {
			var changed_values =country[8].filter(data =>{
				if(data<=1800){
             return data;
				}
            });
            country[8] = changed_values;
        });
		
    }
}
var obj2 = new Change();



setTimeout(function(){ obj1.outContries(); console.log(1); }, 1000);

setTimeout(function(){ obj1.outContries.apply(obj2); console.log(2); }, 2000);

setTimeout(function(){ obj2.changeCountries.call(obj1,10); console.log(3); }, 3000);

setTimeout(function(){ obj1.outContries(); console.log(4); }, 4000);

obj1.outContries.apply(obj2);


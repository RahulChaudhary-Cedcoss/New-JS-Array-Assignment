var productarray = [];
function myFunction() {
    var Company = document.getElementById("company").value;
    var Model = document.getElementById("model").value;
    var Memory = document.getElementById("memory").value;
    var Price = document.getElementById("price").value;
    var Quantity = document.getElementById("quantity").value;
    console.log(Quantity)

    if (Company == "" || Model == "" || Memory == "" || Price == "") {
        alert("Please fill all the feilds");
    }

    var product = {
        "CompanyName" : `${Company}`,
        "Pmodel" : `${Model}` ,
        "Pmemory": `${Memory}` ,
        "Pprice": `${Price}`,
        "Pquantity": `${Quantity}`,
        // CompanyName: Company,
        // Pmodel: Model,
        // Pmemory: Memory,
        // Pprice: Price,
        // Pquantity: Quantity,
    };
    productarray.push(product);
    Display();
    var options = "<option>-Select Field-</option>"
    productarray.forEach((element,index) => {
        options += `<option value="${index}"> ${element.CompanyName} ${element.Pmodel}</option>` 
    });document.getElementById("SelectedProduct").innerHTML = options;
    document.getElementById("UpdatedItems").innerHTML = options;
    // document.getElementById("rating_product").innerHTML = options;
    };
function Display() {
    html =
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Rating</th></tr>";
        var Table_footer = `<tr><th></th><th></th><th></th><th></th><th></th><th></th>
                             <th><button id = "deleteSelected" onclick="deleted()">Delete</button></th>
                             </tr></table>`
    productarray.forEach((element ,index) => {
        html +=
        `  <tr>
                <td>${element.CompanyName}</td>
                <td>${element.Pmodel}</td>
                <td>${element.Pmemory}</td>
                <td>${element.Pprice}</td>
                <td>${element.Pquantity}</td>
                <td><input type="checkbox" class="BOX" name="feild" value="${index}"></td> 
            </tr>`
            // "<tr><td>" +
            // element.CompanyName +
            // "</td><td>" +
            // element.Pmodel +
            // "</td><td>" +
            // element.Pmemory +
            // "</td><td>" +
            // element.Pprice +
            // "</td><td>" +
            // element.Pquantity +
            // "</td></tr>";
    });
    html += "</table>";
    document.getElementById("demo").innerHTML = html + Table_footer;
};
// console.log(html);
function sort() {
    var Asc_Des = document.getElementById('Arranging').value;
    var Col_Select = document.getElementById("ColSelect").value;
    // console.log(Asc_Des);
    // console.log(Col_Select);
    if (Col_Select == "company") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => {
                // console.log("Inside Ascen Comp");
                if (a.CompanyName < b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName > b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => {
                // let AA = a.CompanyName;
                // let BB = b.company;

                if (a.CompanyName > b.CompanyName) {
                    return -1;
                }
                if (a.CompanyName < b.CompanyName) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }
        console.log(productarray);
    }

    else if (Col_Select == "model") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => {
                // let AA = a.model;
                // let BB = b.model;

                if (a.Pmodel < b.Pmodel) {
                    return -1;
                }
                if (a.Pmodel > b.Pmodel) {
                    return 1;
                }
                return 0;
            });

        } else if (Asc_Des == "descending") {
            productarray.sort((a, b) => {
                // let AA = a.model;
                // let BB = b.model;

                if (a.Pmodel > b.Pmodel) {
                    return -1;
                }
                if (a.Pmodel < b.Pmodel) {
                    return 1;
                }
                return 0;
            });
        }
        else {
        }

    }
    else if (Col_Select == "memory") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => a.Pmemory - b.Pmemory);
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => b.Pmemory - a.Pmemory);
        } else {

        }

    }
    else if (Col_Select == "price") {
        if (Asc_Des == "ascending") {
            productarray.sort((a, b) => a.Pprice - b.Pprice);
        }
        else if (Asc_Des == "descending") {
            productarray.sort((a, b) => b.Pprice - a.Pprice);
        }
        else {

        }
    }
    else {

    } Display();
};


///          Delete Section

function Deleted(){
        let ForCheck = document.querySelectorAll('input[name="feild"]:checked');
        let Selected = [];
        ForCheck.forEach((checkbox) => {
            Selected.push(checkbox.value);
        });
        // alert(values);
        Selected.forEach(element => {
            productarray.splice(element,1)
        });
        Display();
}



function search() {
    var SelectedField = document.getElementById("selectfield").value;
    var FieldType = document.getElementById("fieldtype").value;
    // console.log(SelectedField);
    // console.log(FieldType);
    html = 
        "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th></tr>";
    productarray.forEach(element => {
        // console.log(element.CompanyName);
        if (element.CompanyName == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
        if (element.Pmodel == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
        if (element.Pmemory == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
        if (element.Pprice == FieldType) {
            html +=
                "<tr><td>" +
                element.CompanyName +
                "</td><td>" +
                element.Pmodel +
                "</td><td>" +
                element.Pmemory +
                "</td><td>" +
                element.Pprice +
                "</td></tr>";
        }
    });
    html += "</table>";
    document.getElementById("demo").innerHTML = html;
}

var Holder = [];
var totalcost = 0;
function addtocart() {
    var index = document.getElementById("SelectedProduct").value;
    var B = document.getElementById("quantity2").value;
    var data = productarray[index];
    // console.log(A);
    // console.log(B);
    // console.log(typeof(data));
    var calculatedData = data*B;
    console.log(typeof(calculatedData));

    var data1 = {
        "ProductDetail" : `${data1.CompanyName} ${data1.Pmodel}`,
        "Quantity" : `${B}` ,
        "Price": `${data.Pprice}`,

        // ProductDetail: data.CompanyName,
        // Quantity: B,
        // Price: data,
    };
    totalcost += calculatedData;
    Holder.push(data);
};
// var Product_Bill = "<table><tr><th>ProductDetail</th><th>Quantity</th><th>Price</th></tr>";
var Product_Bill = `<table>
<tr>
    <th>ProductDetail</th>
    <th>Quantity</th>
    <th>Price</th>
</tr>`;
function generatebill() {
    var row = ""
    Holder.forEach(element => {
        row += `<tr>
         <td>${element.ProductDetail}</td>
         <td>${element.Quantity}</td>
         <td>${element.Price}</td>
         </tr>`
    });
    document.getElementById("Product_Bill").innerHTML = Product_Bill + row +
        `<tr>
     <td>Total</td>
     <td></td>
     <td>${totalcost}</td>
     </tr></table>`;
};

function ItemsUpdate() {
    var Index = document.getElementById("UpdatedItems").value;
    var NewQuantity = document.getElementById("UpdatedQuantity").value;
    var data = productarray[Index];
console.log(data)
    data.Pquantity = NewQuantity;
    console.log(typeof(data));

    Display();
}

function SortbyPrice(){
    var minimum_P = document.getElementById("minimum").value;
    var maximum_P = document.getElementById("maximum").value;

    var row =""
    productarray.forEach((element,index) => {
        if(element.Pprice >= minimum_P && element.Pprice <= maximum_P){
        row +=`  <tr>
            <td>${element.CompanyName}</td>
            <td>${element.Pmodel}</td>
            <td>${element.Pmemory}</td>
            <td>${element.Pprice}</td>
            <td>${element.Pquantity}</td>
            <td><input type="checkbox" class="BOX" value="${index}""></td>
        </tr>`
        }
    });
    document.getElementById("demo").innerHTML= html+row;
}

var Rateing = [];
var Ratingtable = `<table>
<tr>
    <th>Company</th>
    <th>Model</th>
    <th>Memory(G</th>
    <th>Price</th>
    <th>Rating</th>
</tr>`

function Rating(){
    var product = document.getElementById("Give_rating").value;
    var rate = document.getElementById("Rate_me").value;
    
    var rateing_product = productarray[product];
    rateing_product.CompanyName = rate
    // console.log("Product :"+product);
    var product = {
        "CompanyName" : `${rateing_product.CompanyName}`,
        "Pmodel" : `${rateing_product.Pmodel}` ,
        "Memory": `${rateing_product.Pmemory}` ,
        "Pprice": `${rateing_product.Pprice}`,
        "Rating":`${rate}`,
    };
    Rateing.push(product);

    var row = ""
    Rateing.forEach((element) => {
        row +=`  <tr>
                <td>${element.CompanyName}</td>
                <td>${element.Pmodel}</td>
                <td>${element.Pmemory}</td>
                <td>${element.Pprice}</td>
                <td>${element.Rating}</td>
            </tr>`
    });        
    document.getElementById("Ratingtable").innerHTML=Ratingtable+row+"</table>";
   
}
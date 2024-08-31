const Elements = [
    {
        Name: 'Hydrogen',
        Symbol: 'H',
        AtomicNo: 1,
        AtomicMass: 1.008,
        Group: 'I A',
        Period: 1 
    },
    {
        Name: 'Helium',
        Symbol: 'He',
        AtomicNo: 2,
        AtomicMass: 4.0026,
        Group: 'II A',
        Period: 1 
    },
    {
        Name: 'Lithium',
        Symbol: 'Li',
        AtomicNo: 3,
        AtomicMass: 6.94,
        Group: 'I A',
        Period: 2 
    },
    {
        Name: 'Beryllium',
        Symbol: 'Be',
        AtomicNo: 4,
        AtomicMass: 9.0122,
        Group: 'II A',
        Period: 2 
    },
    {
        Name: 'Boron',
        Symbol: 'B',
        AtomicNo: 5,
        AtomicMass: 10.81,
        Group: 'III A',
        Period: 2 
    },
    {
        Name: 'Carbon',
        Symbol: 'C',
        AtomicNo: 6,
        AtomicMass: 12.011,
        Group: 'IV A',
        Period: 2 
    },
    {
        Name: 'Nitrogen',
        Symbol: 'N',
        AtomicNo: 7,
        AtomicMass: 14.007,
        Group: 'V A',
        Period: 2 
    },
    {
        Name: 'Oxygen',
        Symbol: 'O',
        AtomicNo: 8,
        AtomicMass: 15.999,
        Group: 'VI A',
        Period: 2 
    },
    {
        Name: 'Fluorine',
        Symbol: 'F',
        AtomicNo: 9,
        AtomicMass: 18.998,
        Group: 'VII A',
        Period: 2 
    },
    {
        Name: 'Neon',
        Symbol: 'Ne',
        AtomicNo: 10,
        AtomicMass: 20.180,
        Group: 'VIII A',
        Period: 2 
    },
    {
        Name: 'Sodium',
        Symbol: 'Na',
        AtomicNo: 11,
        AtomicMass: 22.990,
        Group: 'I A',
        Period: 3 
    },
    {
        Name: 'Magnesium',
        Symbol: 'Mg',
        AtomicNo: 12,
        AtomicMass: 24.305,
        Group: 'II A',
        Period: 3 
    },
    {
        Name: 'Aluminum',
        Symbol: 'Al',
        AtomicNo: 13,
        AtomicMass: 26.982,
        Group: 'III A',
        Period: 3 
    },
    {
        Name: 'Silicon',
        Symbol: 'Si',
        AtomicNo: 14,
        AtomicMass: 28.085,
        Group: 'IV A',
        Period: 3 
    },
    {
        Name: 'Phosphorus',
        Symbol: 'P',
        AtomicNo: 15,
        AtomicMass: 30.974,
        Group: 'V A',
        Period: 3 
    },
    {
        Name: 'Sulfur',
        Symbol: 'S',
        AtomicNo: 16,
        AtomicMass: 32.06,
        Group: 'VI A',
        Period: 3 
    },
    {
        Name: 'Chlorine',
        Symbol: 'Cl',
        AtomicNo: 17,
        AtomicMass: 35.45,
        Group: 'VII A',
        Period: 3 
    },
    {
        Name: 'Argon',
        Symbol: 'Ar',
        AtomicNo: 18,
        AtomicMass: 39.948,
        Group: 'VIII A',
        Period: 3 
    },
    {
        Name: 'Potassium',
        Symbol: 'K',
        AtomicNo: 19,
        AtomicMass: 39.098,
        Group: 'I A',
        Period: 4 
    },
    {
        Name: 'Calcium',
        Symbol: 'Ca',
        AtomicNo: 20,
        AtomicMass: 40.078,
        Group: 'II A',
        Period: 4 
    }
];
const nameField=document.getElementById('nameField')
const showButton=document.getElementById('showButton')
const asideField=document.getElementById('asideField')
const listItem=document.getElementById('listItem')

showButton.onclick=function(){
    showDetails()
}
function showDetails(){
    removePrevious()
    Elements.forEach(element=>{
        if(nameField.value===element.Name){
            for(let x in element){
                let item=document.createElement('li')
                item.innerHTML=x +": " + element[x]
                item.classList.add('listDesign')
                asideField.appendChild(item)
            }
    }
    })
}
function removePrevious(){
    Array.from(asideField.children).forEach(list=>{
        list.style.display='none'
    })
}
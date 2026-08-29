// we can create an array of 1000 random numbers and then we can access the values of the array using user specified index.

const bigArray=[];
for(let i=0;i<1000;i++){
    const randomNumber=Math.floor(Math.random()*1000);
    bigArray.push(randomNumber);
}

const H2=document.createElement('h2');
H2.className='access-title';
H2.textContent='User Specified Index Accessing';
document.body.appendChild(H2);

const input=document.createElement('input');
input.className='index-input';
input.type='number';
input.placeholder='Enter an index (We Have 1000+ elements in the array)';
document.body.appendChild(input);

const button=document.createElement('button');
button.className='access-button';
button.textContent='Access Value';
document.body.appendChild(button);

const result=document.createElement('p');
result.className='access-result';
document.body.appendChild(result);

button.addEventListener('click',()=>{
    const index=parseInt(input.value);
    if(index>=0 && index<bigArray.length){
        result.textContent=`Value at index ${index} is: ${bigArray[index]}`;
    }else{
        result.textContent='Index out of bounds! Please enter a valid index.';
    }
});

input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        button.click();
    }
});


// we can use forEach method to traverse through the array and access the values and indexes of the array elements.

const H1=document.createElement('h1');
H1.className='page-title';
H1.textContent='Array Traversal & Accessing';
document.body.appendChild(H1);

const numbers=[9,3,5,8,7,6,1,2,4,0];

numbers.forEach((number,index)=>{
    const p=document.createElement('p');
    p.className='traversal-item';
    p.textContent=`Index: ${index} and Value: ${number}`;
    document.body.appendChild(p);
});


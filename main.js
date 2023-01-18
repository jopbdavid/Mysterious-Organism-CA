// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


function pAequorFactory(specimenNum, arr){
  return  {
   specimenNum : specimenNum,
   dna : arr,
   
   mutate(){
    const index = Math.floor(Math.random()*this.dna.length);
    console.log(index)
    console.log(this.dna)
    console.log(this.dna[index])
    switch(this.dna[index]){
      case "A":
         if(Math.floor(Math.random()*3)===0){
          this.dna[index] = "T";
          
          console.log(this.dna)
          
         } else if (Math.floor(Math.random()*3)===1){
          this.dna[index] = "C";
          
          console.log(this.dna)
          
         } else if (Math.floor(Math.random()*3)===2){
          this.dna[index] = "G";
          console.log(this.dna)
          
         }
      case "T":
         if(Math.floor(Math.random()*3)===0){
          this.dna[index] = "A";
          console.log(this.dna)
          
         } else if (Math.floor(Math.random()*3)===1){
          this.dna[index] = "C";
          console.log(this.dna)
          
         } else if (Math.floor(Math.random()*3)===2){
          this.dna[index] = "G";
          console.log(this.dna)
          
         }
      case "C":
          if(Math.floor(Math.random()*3)===0){
            this.dna[index] = "A";
            console.log(this.dna)
           
          } else if (Math.floor(Math.random()*3)===1){
            this.dna[index] = "T";
            console.log(this.dna)
           
          } else if (Math.floor(Math.random()*3)===2){
            this.dna[index] = "G";
            console.log(this.dna)
           
          }
      case "G":
            if(Math.floor(Math.random()*3)===0){
              this.dna[index] = "A";
              console.log(this.dna)
             
            } else if (Math.floor(Math.random()*3)===1){
              this.dna[index] = "T";
              console.log(this.dna)
             
            } else if (Math.floor(Math.random()*3)===2){
              this.dna[index] = "C";
              console.log(this.dna)
             
            }
        
    }
   
  },

  compareDNA(pAequor){
    const filArr = [] 
    let counter = 0;

  for (base1 of pAequor.dna){
    if (base1 === this.dna[counter]){

      filArr.push(base1)
      counter++;
    } else {
      counter++;
    }
  }
  console.log(filArr)
  const percentage = (filArr.length/this.dna.length)*100
 
  console.log(`specimen ${pAequor.specimenNum} and ${this.specimenNum} have ${Math.floor(percentage)}% DNA in common.`)
  },
  

  willLikelySurvive(){
    newArr = this.dna.filter(x => x === "C" || x === "G");
    
    return newArr.length/this.dna.length >= 0.6;

  },
};

}

const Jay = pAequorFactory(1,mockUpStrand());
const Bee = pAequorFactory(2,mockUpStrand());
//console.log(Jay.mutate())
console.log(Jay.dna)
console.log(Bee.dna)
Jay.compareDNA(Bee)
console.log(Jay.willLikelySurvive())

let batch = []
let i = 3;
while (i<=33){
  console.log(i)
  batch.push(pAequorFactory(i,mockUpStrand));
  i++;
}
console.log(batch)









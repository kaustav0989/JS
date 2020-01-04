function* shopping(){
    const returnFromStore =yield "cash";
    return returnFromStore;
}

const gen = shopping();
console.log(gen.next())
console.log(gen.next("groceries"))
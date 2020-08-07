class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "chiriakhana botanical high school";
    }
}
const student1 = new Student( 12, "shuvo");
const student2 = new Student( 22, "mahiya");
const student3 = new Student(33, "shamim");
console.log(student1, student2, student3);


class Client{
    constructor(cNum, cName){
        this.serialNo = cNum;
        this.name = cName;
        this.Company = "CanvasOfSHAMIM.com";
    }
}

const client1 = new Client(1, "Ornoy");
const client2 = new Client(2, "Ishra");
const client3 = new Client (3, "Mehruba");
console.log(client1, client2);
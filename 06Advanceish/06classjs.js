class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    #courseList = [];    //# for private variables
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {   //getters-setters
        this.#courseList.push(name);
    }
    getCourseList() {
        return this.#courseList;
    }
    // static 
    login(){  //static made it consized to user 
        return "Logged In";
    }
}

class subAdmin extends user{   //to inherit from user
    constructor(name,email){
        super(name,email); //super keyword:The super keyword is used to access and call functions on an object's parent.
    }
        getAdminInfo(){
            return "I am sub-admin";
        }
        login(){
            return "hellooooo";
        }
}



module.exports= user;

// const rock= new user("rock","rock@gmail.com");
// console.log(rock.getInfo());
// rock.enrollCourse("angular");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

const tom=new subAdmin("tom","jerry@hehe");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());
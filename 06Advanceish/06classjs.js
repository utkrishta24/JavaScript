class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.courseList.push(name);
    }
    getCourseList() {
        return this.courseList;
    }
}

module.exports= user;

const rock= new user("rock","rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("angular");
console.log(rock.getCourseList());
console.log(rock.courseList);
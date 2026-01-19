export class college {
    collegeName: string ;
    collegeAddress: string;
    collegePhone: string;
    collegeEmail: string;
    collegeWebsite: string;

   constructor(collegeName: string, collegeAddress: string, collegePhone: string, collegeEmail: string, collegeWebsite: string) {
        this.collegeName = collegeName;
        this.collegeAddress = collegeAddress;
        this.collegePhone = collegePhone;
        this.collegeEmail = collegeEmail;
        this.collegeWebsite = collegeWebsite;
   }

    getCollegeDetails(): string {
        return `College Name: ${this.collegeName}, Address: ${this.collegeAddress}, Phone: ${this.collegePhone}, Email: ${this.collegeEmail}, Website: ${this.collegeWebsite}`;
    }
    
    public displayCollegeInfo(): void {
        console.log(this.getCollegeDetails());
    }
}

export class department extends college {
    departmentName: string;
    headOfDepartment: string;  
    numberOfProfessors: number; 
    numberOfStudents: number;
    coursesOffered: string[];

    constructor(collegeName: string, collegeAddress: string, collegePhone: string, collegeEmail: string, collegeWebsite: string, departmentName: string, headOfDepartment: string, numberOfProfessors: number, numberOfStudents: number, coursesOffered: string[]) {
        super(collegeName, collegeAddress, collegePhone, collegeEmail, collegeWebsite);
        this.departmentName = departmentName;
        this.headOfDepartment = headOfDepartment;
        this.numberOfProfessors = numberOfProfessors;
        this.numberOfStudents = numberOfStudents;
        this.coursesOffered = coursesOffered;
    }
    getDepartmentDetails(): string {
        return `Department Name: ${this.departmentName}, Head: ${this.headOfDepartment}, Professors: ${this.numberOfProfessors}, Students: ${this.numberOfStudents}, Courses: ${this.coursesOffered.join(", ")}`;
    }
    public displayDepartmentInfo(): void {
        console.log(this.getDepartmentDetails());
    }
}

const dep = new department("Tech University", "123 Tech St, Innovation City", "123-456-7890", "info@techuniversity.edu", "www.techuniversity.edu", "Computer Science", "Dr. Smith", 15, 200, ["Data Structures", "Algorithms"]);
//dep.displayCollegeInfo();
dep.displayDepartmentInfo();
const quizData = [
    {
        question: "Question 1: If an Employee must have one Car and a Car must be assigned to one Employee, how do you complete the mapping?",
        options: {
            A: "Add Car_no Column To Table Employees",
            B: "Merge two tables into one table",
            C: "Create a new table with (Emp_no, Car_no) columns",
            D: "Add Emp_No Column To Table Car"
        },
        correct: "D"
    },
    {
        question: "Question 2: If you insert a new dependent into the Dependent table with columns (ESSN, Dependent_Name, Gender, Bdate, R), which of the following is the correct INSERT statement?",
        options: {
            A: "Insert into dependent values (7, 'ahmed', 'm', '4-2-1999')",
            B: "Insert into dependent values ('ahmed', 'm', '4-2-1999', 'Son')",
            C: "Insert into dependent (Essn, dep_name, sex, bdate, rel) values (7, 'ahmed', 'm', '4-2-1999', 'son')",
            D: "Insert into dependent (Essn, dep_name, sex, bdate, rel) values ('ahmed', 'm', '4-2-1999')"
        },
        correct: "C"
    },
    {
        question: "Question 3: To display all products that have orders or not, which SQL statement is correct?",
        options: {
            A: "select * from products, orders where products.productid = orders.productid",
            B: "select * from products left outer join orders on products.productid = orders.productid",
            C: "select * from products Right outer join orders on products.productid = orders.productid",
            D: "select * from products Full outer join orders on products.productid = orders.productid"
        },
        correct: "B"
    },
    {
        question: "Question 4: To display the employee who has the highest salary, which SQL statement is correct?",
        options: {
            A: "select Empname from employee having max(salary)",
            B: "select Empname from employee where salary = max(salary)",
            C: "select Empname from employee where salary = max(salary) limit 1",
            D: "select Empname from employee where salary = (select max(salary) from employee)"
        },
        correct: "D"
    },
    {
        question: "Question 5: If a Customer has many Orders and an Order has one Customer, how do you complete the mapping?",
        options: {
            A: "Create a new table with (Cust_no, Order_no) columns",
            B: "Merge two tables into one table",
            C: "Add Order_no column to table Customers",
            D: "Add Cust_No column to table Orders"
        },
        correct: "D"
    },
    {
        question: "Question 6: To display department data that has zero employees, which SQL statement is correct?",
        options: {
            A: "Select d.* from departments d right outer join employees e on dno = dnumber",
            B: "Select d.* from departments d left outer join employees e on dno = dnumber",
            C: "Select d.* from departments d where dnumber not in (select dno from employees where dno is not null)",
            D: "Select d.* from departments d full outer join employees e on dno = dnumber"
        },
        correct: "B"
    },
    {
        question: "Question 7: To update the salary to $3000 for all employees whose salary is less than the maximum salary on department 50, which SQL statement is correct?",
        options: {
            A: "update Employee set salary = 3000",
            B: "update Employee set salary = 3000 where salary < (select max(salary) from employees)",
            C: "update Employee set salary = 3000 where salary < (select max(salary) from employees having deptid = 50)",
            D: "update Employee set salary = 3000 where salary < (select max(salary) from employees where deptid = 50)"
        },
        correct: "D"
    },
    {
        question: "Question 8: To display departments that have greater than or equal to 3 employees, which SQL statement is correct?",
        options: {
            A: "select dnumber from departments where count(ssn) >= 3",
            B: "select dnumber from departments group by dnumber having count(ssn) >= 3",
            C: "select dnumber from departments, employees where dno = dnumber and count(ssn) >= 3 group by dnumber",
            D: "select dnumber from departments, employees where dno = dnumber group by dnumber having count(ssn) >= 3"
        },
        correct: "D"
    },
    {
        question: "Question 9: To create a table Customers with the primary key Cust_no, which statement is correct?",
        options: {
            A: "Create Table Customers (Cust_no int, Cust_name varchar(40))",
            B: "Create Table Customers (Cust_no int identity Cust_name varchar(40))",
            C: "Create Table Customers (Cust_no int, Cust_name varchar(40), Constraint cust_pk primary key (cust_no))",
            D: "None of the above"
        },
        correct: "C"
    },
    {
        question: "Question 10: To change the column Salary to be a required entry on the Employee table, which statement is correct?",
        options: {
            A: "Alter Table Employee Alter Column Salary int",
            B: "Alter Table Employee add constraint sal_un unique (salary)",
            C: "Alter Table Employee add constraint sal_pk primary key (salary)",
            D: "Alter Table Employee Alter Column Salary int Not NULL"
        },
        correct: "D"
    },
    {
        question: "Question 11: To delete all records from the Departments table, which statement is correct?",
        options: {
            A: "Delete From Departments where dept_no = 3",
            B: "Delete from Departments",
            C: "Delete Table Departments",
            D: "None of the above"
        },
        correct: "B"
    },
    {
        question: "Question 12: To display employees who have two or more dependents with a different sex, which SQL statement is correct?",
        options: {
            A: "select emp_name, count(essn) from employee, dependent where ssn = essn group by emp_name having count(ssn) >= 2",
            B: "select emp_name from employeee, dependent d where ssn = essn and d.sex in ('m','f')",
            C: "select emp_name, count(essn) from employee e, dependent d where ssn=essn and d.sex in ('m','f') group by emp_name having count(ssn) >= 2",
            D: "select emp_name from employee where ssn in (select essn from dependent where sex = 'm') and ssn in (select essn from dependent where sex = 'f')"
        },
        correct: "D"
    },
    {
        question: "Question 13: To display the total hours that each employee works on all projects, only for employees who work for greater than 120 hours on all projects, which statement is correct?",
        options: {
            A: "select pno, sum(hours) from projects, works_on where pno = pnumber group by pno having sum(hours) > 120",
            B: "select pno, sum(hours) from projects, works_on where pno = pnumber and sum(hours) > 120 group by pno",
            C: "select ssn, sum(hours) from employees, works_on where ssn = essn group by ssn having sum(hours) > 120",
            D: "select ssn, sum(hours) from employees, works_on where ssn = essn and sum(hours) > 120 group by ssn"
        },
        correct: "C"
    },
    {
        question: "Question 14: To display a student's grade for all courses, which SQL statement is correct?",
        options: {
            A: "select student_name,grade from students",
            B: "select student_name,grade from students_course",
            C: "select student_name,course_no, grade from students,students_course where students.st_no = students_course.st_no",
            D: "select student_name,grade from students, students_course"
        },
        correct: "C"
    },
    {
        question: "Question 15: To delete a department with all employees working in it, which statement is correct?",
        options: {
            A: "Alter Table employees add constraint dept_no foreign key (dept_no) references [departments] (dept_no)",
            B: "Alter Table employees add constraint dept_no foreign key (dept_no) references [departments] (dept_no) on delete cascade",
            C: "Alter Table departments add constraint dept_no foreign key (dept_no) references [employees (dept_no) on delete cascade",
            D: "Alter Table departments add constraint dept_no foreign key (dept_no) references [employees] (dept_no)"
        },
        correct: "B"
    },
    {
        question: "Question 16: To display only the second-highest salary, which SQL statement is correct?",
        options: {
            A: "select max(salary) from employees",
            B: "select salary from employees order by salary desc Limit 2",
            C: "select salary from employees where salary < (select max(salary) from employees)",
            D: "select max(salary) from employees where salary < (select max(salary) from employees)"
        },
        correct: "D"
    },
    {
        question: "Question 17: To increase the salary by 20% for employees working in the Finance Department, which statement is correct?",
        options: {
            A: "update employees set salary = salary * 0.2 where dept_name = 'Finance'",
            B: "update employees set salary = salary * 1.2 where dept_name = 'Finance'",
            C: "update employees set salary = salary * 0.2 where dept_id = (select dept_id from departments where dept_name = 'Finance')",
            D: "update employees set salary = salary * 1.2 where dept_id = (select dept_id from departments where dept_name = 'Finance')"
        },
        correct: "D"
    },
    {
        question: "Question 18: To display project data with the same department for Project 'Elwaha', which statement is correct?",
        options: {
            A: "select * from projects, departments where p.pno = d.pno and pname = 'Elwaha'",
            B: "select p.* from projects, departments where p.dno = d.dno and pname = 'Elwaha'",
            C: "select * from projects where dno = (select dno from projects where pname = 'Elwaha') and pname <> 'Elwaha'",
            D: "select * from projects where pno = (select pno from projects where pname = 'Elwaha') and pname <> 'Elwaha'"
        },
        correct: "C"
    },
    {
        question: "Question 19: To calculate the average salary for all employees, which SQL statement is correct?",
        options: {
            A: "select count(salary) from employee",
            B: "select avg(salary) from employee",
            C: "select sum(salary) from employee",
            D: "select avg(isnull(salary,0)) from employee"
        },
        correct: "B"
    },
    {
        question: "Question 20: To calculate the count of characters of the full name for an employee, which SQL statement is correct?",
        options: {
            A: "select concat(fname, '', Iname) from employee",
            B: "select len(fname, Iname) from employee",
            C: "select len(concat(fname,' ', Iname)) from employee",
            D: "select sum(concat(fname,' ',Iname)) from employee"
        },
        correct: "C"
    },
    {
        question: "Question 21: To calculate the age of employees, which of these is a correct SQL statement?",
        options: {
            A: "select getdate() - bdate from employee",
            B: "select year(getdate()) - year(bdate) from employee",
            C: "select dateadd(year,getdate()) - dateadd(year,bdate) from employee",
            D: "None of the above"
        },
        correct: "B"
    },
    {
        question: "Question 22: Which of these is an incorrect syntax?",
        options: {
            A: "select left(fname,2) from employee",
            B: "select substring(fname,2,3) from employee",
            C: "select len(fname,4) from employee",
            D: "select concat(fname,'5',Iname,'7') from employee"
        },
        correct: "C"
    },
    {
        question: "Question 23: To avoid duplicate ranking values, which function should you use?",
        options: {
            A: "Rank",
            B: "Row_Number",
            C: "Dense_Rank",
            D: "Ntile"
        },
        correct: "C"
    },
    {
        question: "Question 24: What is the output of the following T-SQL code block?",
        options: {
            A: "NULL",
            B: "100",
            C: "120",
            D: "90"
        },
        correct: "C"
    },
    {
        question: "Question 25: What is the output of the following stored procedure logic for an employee with ssn = 80?",
        options: {
            A: "Less 5",
            B: "Less 30",
            C: "Less 80",
            D: "Greater 80"
        },
        correct: "D"
    },
    {
        question: "Question 26: You want to create a view v1 as select distinct fname, Iname, salary from employee where salary > 70000. Which of these is a correct syntax to use with the view?",
        options: {
            A: "insert into v1 values ('a', 'b',40000)",
            B: "Update v1 set salary = 80000 where fname = 'b'",
            C: "Select * from v1",
            D: "Delete From Employee where fname = 'b'"
        },
        correct: "C"
    },
    {
        question: "Question 27: A trigger t1 is created on an employee table to execute after insert. The trigger code includes a declare @x int = 200 and set @x = @x + select count(*) from inserted. What is the output if you execute insert into employee (ssn) Values (3000), (4000)?",
        options: {
            A: "Less 200",
            B: "Less 203",
            C: "Greater 203",
            D: "None Of Above"
        },
        correct: "C"
    },
    {
        question: "Question 28: Which of these objects has no parameter?",
        options: {
            A: "Procedures",
            B: "Functions",
            C: "Triggers",
            D: "None Of Above"
        },
        correct: "C"
    },
    {
        question: "Question 29: There are 10 students in a table, and you rank them in 3 groups using Ntile(3). How many students are in each group?",
        options: {
            A: "4 (G1), 3 (G2), and 3 (G3)",
            B: "3 (G1), 4 (G2), and 3 (G3)",
            C: "3 (G1), 3 (G2), and 4 (G3)",
            D: "None of the above"
        },
        correct: "A"
    },
    {
        question: "Question 30: When can you insert and update through a view?",
        options: {
            A: "When the view contains group functions",
            B: "When the view contains the distinct keyword",
            C: "When the view contains multiple tables",
            D: "When the view contains a single table"
        },
        correct: "D"
    },
    {
        question: "Question 31: To link a table with a view and ensure you can't drop or alter the table used in the view, what should you use?",
        options: {
            A: "View With Encryption",
            B: "View With Schemabinding",
            C: "View With Check Option",
            D: "None Of Above"
        },
        correct: "B"
    },
    {
        question: "Question 32: To increase the performance of a search in a table, what should you use?",
        options: {
            A: "Non-Clustered Index",
            B: "Unique Index",
            C: "Non-Unique Index",
            D: "Clustered Index"
        },
        correct: "D"
    },
    {
        question: "Question 33: A variable @x is declared as int = 300, and then set to (select top(1) salary from employee order by salary). If there is 1 employee with no salary (NULL) and the maximum salary is $60,000, what is the value of @x?",
        options: {
            A: "300",
            B: "NULL",
            C: "60000",
            D: "60300"
        },
        correct: "B"
    },
    {
        question: "Question 34: You want to create a procedure that takes a department name and displays the number of employees who work in it. Which line of code is the correct way to select the count?",
        options: {
            A: "set @c = (select count(dname) from departments)",
            B: "set @c = (select count(ssn) from employee)",
            C: "set @c = (select count(*) from departments where dname = @d)",
            D: "set @c = (select count(ssn) from employee, departments where dno = dnum and dname = @d)"
        },
        correct: "D"
    },
    {
        question: "Question 35: What kind of trigger should you use to display a message with data that was inserted into a table and is already saved on the table?",
        options: {
            A: "Trigger work Instead of Insert",
            B: "Trigger work After Insert",
            C: "Trigger work Instead of Update",
            D: "Trigger work After Update"
        },
        correct: "B"
    },
    {
        question: "Question 36: A transaction block is started with BEGIN TRANSACTION, and then four INSERT statements and one UPDATE statement are executed. The UPDATE statement sets c1 = 1 where c1 = 3. Finally, the transaction is COMMITted. If the t1 table has c1 as a primary key, what data is stored on the table?",
        options: {
            A: "There are 4 rows in T1 (1), (2), (3), (4)",
            B: "There is No Rows on T1",
            C: "There are 3 Rows in T1 (1), (2), (3)",
            D: "None of the above"
        },
        correct: "B"
    },
    {
        question: "Question 37: To give a user named 'Ahmed' permission to INSERT and SELECT on the Employee table, which statement is correct?",
        options: {
            A: "Use Windwos Authentication And Grant insert on Employee To Ahmed Grant select on employee to Ahmed",
            B: "Use SQL Authentication And Grant insert on Employee to Ahmed Grant Select on employee to Ahmed",
            C: "Use Windows Authentication And Revoke update on Employee from Ahmed Revoke Delete on employee from Ahmed",
            D: "Use SQL Authentication And Revoke update on Employee from Ahmed Revoke Delete on employee from Ahmed"
        },
        correct: "B"
    },
    {
        question: "Question 38: When using a MERGE command to take data from table T2 and insert it into table T1, which of these is not a true statement?",
        options: {
            A: "when matched then update set t1.c2 = t2.c2",
            B: "when not matched then insert values (t2.c1, t2.c2)",
            C: "when matched then update set t2.c2 = t1.c2",
            D: "None of the above"
        },
        correct: "C"
    },
    {
        question: "Question 39: What is the output of the following WHILE loop?",
        options: {
            A: "There are no Rows in t1",
            B: "There is 3 Rows (63,66,69)",
            C: "There are 4 rows (60,63,66,69)",
            D: "None of the above"
        },
        correct: "C"
    },
    {
        question: "Question 40: Which of the following employee attributes can be considered multi-valued as well as composite?",
        options: {
            A: "Telephone",
            B: "Date of birth",
            C: "Full name",
            D: "Social security number"
        },
        correct: "A"
    },
    {
        question: "Question 41: To make a backup quickly and be able to restore the database at any time, which backup date type should you use?",
        options: {
            A: "Differential",
            B: "Transaction Log",
            C: "Full",
            D: "None of the above"
        },
        correct: "A"
    }
];

const quizEl = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const resultsEl = document.getElementById('results');

function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const options = [];
        for (const key in currentQuestion.options) {
            options.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${key}">
                    ${key}. ${currentQuestion.options[key]}
                </label>`
            );
        }
        output.push(
            `<div class="question">
                <h3>${currentQuestion.question}</h3>
                <div class="options">${options.join('')}</div>
            </div>`
        );
    });
    quizEl.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizEl.querySelectorAll('.options');
    let numCorrect = 0;
    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
        }
    });

    resultsEl.innerHTML = `${numCorrect} out of ${quizData.length} correct.`;
}

submitBtn.addEventListener('click', showResults);
buildQuiz();
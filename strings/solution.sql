 You are given two tables, department and employee, with the following structure:
  create table department (
  dept_id integer not null,
  dept_name varchant(30) not null,
  dept_location vatchart(30) not null,
  unique(dept_id)
);

create table employee (
  emp_id integer not null,
  emp_name varchant(50) not null,
  dept_id integer not null,
  salary integer not null,
  unique(emp_id),
);

write an SQL query that returns a table comprising all the departments (dept_id)
in the table department that hire at least one employee, the number of people they employ and the sum of salaries in each department. The table should be ordered by dept_id(in increasing order).

Sample Input
department table:
+---------+------------+----------------+
| dept_id | dept_name  | dept_location  |
+---------+------------+----------------+
| 1       | Marketing  | New York       |
| 2       | Operations | Boston         |
| 3       | Finance    | Chicago        |

employee table:
+---------+------------+---------+--------+
| emp_id  | emp_name   | dept_id | salary |
+---------+------------+---------+--------+
| 1       | Alice      | 1       | 1000   |
| 2       | Bob        | 2       | 2000   |
| 3       | Charlie    | 3       | 3000   |
| 4       | Daniel     | 1       | 4000   |

Sample Output
+---------+----------------+-------------+
| dept_id | employee_count | total_salary|
+---------+----------------+-------------+
| 1       | 2              | 5000        |
| 2       | 1              | 2000        |
| 3       | 1              | 3000        |
+---------+----------------+-------------+


-- Language: sql
-- Path: strings/solution.sql
 You are given two tables, department and employee, with the following structure:
  create table department (
  dept_id integer not null,
  dept_name varchant(30) not null,
  dept_location vatchart(30) not null,
  unique(dept_id)
);

create table employee (
  emp_id integer not null,
  emp_name varchant(50) not null,
  dept_id integer not null,
  salary integer not null,
  unique(emp_id),
);

write an SQL query that returns a table comprising all the departments (dept_id)
in the table department that hire at least one employee, the number of people they employ and the sum of salaries in each department. The table should be ordered by dept_id(in increasing order).

Sample Input
department table:
+---------+------------+----------------+
| dept_id | dept_name  | dept_location  |
+---------+------------+----------------+
| 1       | Marketing  | New York       |
| 2       | Operations | Boston         |
| 3       | Finance    | Chicago        |

employee table:
+---------+------------+---------+--------+
| emp_id  | emp_name   | dept_id | salary |
+---------+------------+---------+--------+
| 1       | Alice      | 1       | 1000   |
| 2       | Bob        | 2       | 2000   |
| 3       | Charlie    | 3       | 3000   |
| 4       | Daniel     | 1       | 4000   |

Sample Output
+---------+----------------+-------------+
| dept_id | employee_count | total_salary|
+---------+----------------+-------------+
| 1       | 2              | 5000        |
| 2       | 1              | 2000        |

-- Language: sql

solution:
SELECT dept_id, COUNT(emp_id) AS employee_count, SUM(salary) AS total_salary
FROM employee
GROUP BY dept_id
ORDER BY dept_id;

-- Language: sql
SOLUTION:
SELECT dept_id, COUNT(emp_id) AS employee_count, SUM(salary) AS total_salary
FROM employee
GROUP BY dept_id
ORDER BY dept_id;

